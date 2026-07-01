import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const columns = 70
const rows = 36
const spacing = 0.36

export default function HeroWave() {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return undefined

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.set(0, 7.8, 8.2)
    camera.lookAt(0, -1.15, -2.8)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    host.appendChild(renderer.domElement)

    const particlePositions = new Float32Array(columns * rows * 3)
    const linePositions = new Float32Array(((columns - 1) * rows + (rows - 1) * columns) * 2 * 3)

    const pointsGeometry = new THREE.BufferGeometry()
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))

    const lineGeometry = new THREE.BufferGeometry()
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))

    const particles = new THREE.Points(
      pointsGeometry,
      new THREE.PointsMaterial({
        color: '#72D8FF',
        size: 0.045,
        transparent: true,
        opacity: 0.92,
        sizeAttenuation: true,
      }),
    )

    const lines = new THREE.LineSegments(
      lineGeometry,
      new THREE.LineBasicMaterial({
        color: '#00A1F0',
        transparent: true,
        opacity: 0.26,
      }),
    )

    const waveGroup = new THREE.Group()
    waveGroup.rotation.x = -0.54
    waveGroup.rotation.z = -0.06
    waveGroup.position.set(0.2, -2.75, -1.4)
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

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < columns; col += 1) {
          const x = col * spacing - xOffset
          const z = row * spacing - zOffset
          const swell = Math.sin((col * 0.26) + t * 2.1) * 0.58
          const ripple = Math.cos((row * 0.38) - t * 1.7) * 0.34
          const cross = Math.sin((col + row) * 0.13 + t) * 0.24
          writePoint(row * columns + col, x, swell + ripple + cross, z)
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

    let frame = 0
    const animate = (time: number) => {
      frame = requestAnimationFrame(animate)
      updateWave(time)
      waveGroup.position.x = 0.2 + Math.sin(time * 0.00028) * 0.32
      renderer.render(scene, camera)
    }
    animate(0)

    return () => {
      cancelAnimationFrame(frame)
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
