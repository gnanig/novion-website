import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const modelUrl = new URL('../../assets/models/computer.glb', import.meta.url).href
const logoUrl = '/assets/logo-icon.png'

function createLogoTexture(onReady: (texture: THREE.CanvasTexture) => void) {
  const image = new Image()
  image.crossOrigin = 'anonymous'
  image.onload = () => {
    const canvas = document.createElement('canvas')
    canvas.width = 1024
    canvas.height = 640

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const maxSize = Math.min(canvas.width, canvas.height) * 0.86
    const ratio = Math.min(maxSize / image.width, maxSize / image.height)
    const width = image.width * ratio
    const height = image.height * ratio
    const x = (canvas.width - width) / 2
    const y = (canvas.height - height) / 2

    ctx.drawImage(image, x, y, width, height)

    const texture = new THREE.CanvasTexture(canvas)
    texture.colorSpace = THREE.SRGBColorSpace
    texture.flipY = false
    texture.anisotropy = 8
    texture.needsUpdate = true
    onReady(texture)
  }
  image.src = logoUrl
}

export default function HeroModel() {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return undefined

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
    camera.position.set(0.15, 1.15, 5.15)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, preserveDrawingBuffer: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.05
    host.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.08
    controls.enablePan = true
    controls.enableZoom = true
    controls.enableRotate = true
    controls.minDistance = 3.6
    controls.maxDistance = 7.2
    controls.target.set(0, 0.06, 0)
    controls.mouseButtons = {
      LEFT: THREE.MOUSE.ROTATE,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: THREE.MOUSE.PAN,
    }
    controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_PAN,
    }

    scene.add(new THREE.HemisphereLight(0xffffff, 0xd7e8f2, 2.4))

    const keyLight = new THREE.DirectionalLight(0xffffff, 3)
    keyLight.position.set(4, 5, 6)
    scene.add(keyLight)

    const sideLight = new THREE.DirectionalLight(0x9ddcff, 1.45)
    sideLight.position.set(-3, 2, 3)
    scene.add(sideLight)

    const screenMaterial = new THREE.MeshBasicMaterial({
      color: '#ffffff',
      side: THREE.DoubleSide,
    })

    createLogoTexture((texture) => {
      screenMaterial.map = texture
      screenMaterial.needsUpdate = true
    })

    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco/')

    const loader = new GLTFLoader()
    loader.setDRACOLoader(dracoLoader)
    let model: THREE.Object3D | null = null

    loader.load(modelUrl, (gltf) => {
      model = gltf.scene
      model.traverse((child) => {
        if (!(child instanceof THREE.Mesh)) return

        child.castShadow = true
        child.receiveShadow = true

        if (/monitor-screen|screen|plane/i.test(child.name) || /screen|plane/i.test(child.geometry.name)) {
          child.material = screenMaterial
          child.renderOrder = 2

          const overlays = [0.05, -0.05].map((y) => {
            const overlay = new THREE.Mesh(new THREE.PlaneGeometry(1.76, 1.16), screenMaterial)
            overlay.rotation.x = -Math.PI / 2
            overlay.position.y = y
            overlay.renderOrder = 3
            return overlay
          })
          child.add(...overlays)
        }
      })

      const box = new THREE.Box3().setFromObject(model)
      const size = box.getSize(new THREE.Vector3())
      const center = box.getCenter(new THREE.Vector3())
      const scale = 3.18 / Math.max(size.x, size.y, size.z)

      model.position.sub(center)
      model.position.y -= 0.08
      model.scale.setScalar(scale)
      model.rotation.set(-0.08, 0.08, 0.03)
      group.add(model)
    })

    const resize = () => {
      const { width, height } = host.getBoundingClientRect()
      if (width === 0 || height === 0) return

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(host)
    resize()

    let frame = 0
    const animate = () => {
      frame = requestAnimationFrame(animate)
      const t = performance.now() / 1000

      group.position.y = Math.sin(t * 1.2) * 0.06
      if (model && !controls.enabled) {
        model.rotation.y = 0.08 + Math.sin(t * 0.55) * 0.08
      }

      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      host.removeChild(renderer.domElement)
      screenMaterial.map?.dispose()
      screenMaterial.dispose()
      controls.dispose()
      dracoLoader.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div className="hero-model-shell">
      <div className="hero-model-wrap" ref={hostRef} aria-label="Interactive 3D computer model" />
      <div className="model-control-chip" aria-hidden="true">Drag / scroll to explore</div>
    </div>
  )
}
