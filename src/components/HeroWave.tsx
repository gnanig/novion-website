import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const columns = 150
const rows = 86
const spacing = 0.42

export default function HeroWave() {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return undefined

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog('#173451', 18, 82)
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 240)
    camera.position.set(0, 16, 5.5)
    camera.lookAt(0, -3.4, -8)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    host.appendChild(renderer.domElement)

    const particlePositions = new Float32Array(columns * rows * 3)
    const linePositions = new Float32Array(((columns - 1) * rows + (rows - 1) * columns) * 2 * 3)
    const pointer = {
      x: 0,
      y: 0,
      strength: 0,
      targetX: 0,
      targetY: 0,
      targetStrength: 0,
    }

    const pointsGeometry = new THREE.BufferGeometry()
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))

    const lineGeometry = new THREE.BufferGeometry()
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))

    const particles = new THREE.Points(
      pointsGeometry,
      new THREE.PointsMaterial({
        color: '#8EE5FF',
        size: 0.042,
        transparent: true,
        opacity: 1,
        sizeAttenuation: true,
      }),
    )

    const lines = new THREE.LineSegments(
      lineGeometry,
      new THREE.LineBasicMaterial({
        color: '#23C2FF',
        transparent: true,
        opacity: 0.46,
      }),
    )

    const waveGroup = new THREE.Group()
    waveGroup.rotation.x = -0.78
    waveGroup.rotation.z = -0.025
    waveGroup.position.set(0, -3.15, -7.4)
    waveGroup.add(lines, particles)
    scene.add(waveGroup)

    const writePoint = (index: number, x: number, y: number, z: number) => {
      particlePositions[index * 3] = x
      particlePositions[index * 3 + 1] = y
      particlePositions[index * 3 + 2] = z
    }

    const getPoint = (col: number, row: number, target: THREE.Vector3) => {
      const index = row * columns + col
      target.set(
        particlePositions[index * 3],
        particlePositions[index * 3 + 1],
        particlePositions[index * 3 + 2],
      )
    }

    const updateWave = (time: number) => {
      const t = time * 0.00055
      const xOffset = ((columns - 1) * spacing) / 2
      const zOffset = ((rows - 1) * spacing) / 2
      const cursorX = pointer.x * xOffset * 0.92
      const cursorZ = pointer.y * zOffset * 0.72

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < columns; col += 1) {
          const x = col * spacing - xOffset
          const z = row * spacing - zOffset
          const swell = Math.sin((col * 0.13) + (row * 0.025) + t * 2.1) * 0.7
          const ripple = Math.cos((row * 0.18) - t * 1.55) * 0.34
          const cross = Math.sin((col + row) * 0.055 + t * 1.2) * 0.24
          const distance = Math.hypot(x - cursorX, z - cursorZ)
          const cursorFalloff = Math.exp(-distance * 0.12) * pointer.strength
          const cursorRipple = Math.sin(distance * 0.95 - t * 8.2) * 0.78 * cursorFalloff
          const cursorLift = Math.cos(distance * 0.34 - t * 3.4) * 0.26 * cursorFalloff
          writePoint(row * columns + col, x, swell + ripple + cross + cursorRipple + cursorLift, z)
        }
      }

      const a = new THREE.Vector3()
      const b = new THREE.Vector3()
      let lineIndex = 0

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < columns - 1; col += 1) {
          getPoint(col, row, a)
          getPoint(col + 1, row, b)
          linePositions.set([a.x, a.y, a.z, b.x, b.y, b.z], lineIndex)
          lineIndex += 6
        }
      }

      for (let row = 0; row < rows - 1; row += 1) {
        for (let col = 0; col < columns; col += 1) {
          getPoint(col, row, a)
          getPoint(col, row + 1, b)
          linePositions.set([a.x, a.y, a.z, b.x, b.y, b.z], lineIndex)
          lineIndex += 6
        }
      }

      pointsGeometry.attributes.position.needsUpdate = true
      lineGeometry.attributes.position.needsUpdate = true
    }

    const resize = () => {
      const { width, height } = host.getBoundingClientRect()
      if (!width || !height) return

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(host)
    resize()

    const onPointerMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect()
      const inBounds =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom

      if (!inBounds) {
        pointer.targetStrength = 0
        return
      }

      pointer.targetX = ((event.clientX - rect.left) / rect.width) * 2 - 1
      pointer.targetY = ((event.clientY - rect.top) / rect.height) * 2 - 1
      pointer.targetStrength = 1
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })

    let frame = 0
    const animate = (time: number) => {
      frame = requestAnimationFrame(animate)
      pointer.x += (pointer.targetX - pointer.x) * 0.08
      pointer.y += (pointer.targetY - pointer.y) * 0.08
      pointer.strength += (pointer.targetStrength - pointer.strength) * 0.1
      updateWave(time)
      waveGroup.position.x = Math.sin(time * 0.00024) * 0.6 + pointer.x * 0.48 * pointer.strength
      waveGroup.position.y = -3.15 - pointer.y * 0.18 * pointer.strength
      waveGroup.rotation.z = -0.025 + pointer.x * 0.035 * pointer.strength
      renderer.render(scene, camera)
    }
    animate(0)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onPointerMove)
      observer.disconnect()
      host.removeChild(renderer.domElement)
      pointsGeometry.dispose()
      lineGeometry.dispose()
      ;(particles.material as THREE.Material).dispose()
      ;(lines.material as THREE.Material).dispose()
      renderer.dispose()
    }
  }, [])

  return <div className="hero-wave" ref={hostRef} aria-hidden="true" />
}
