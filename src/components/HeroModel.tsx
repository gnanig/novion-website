import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const modelUrl = new URL('../../assets/computer.glb', import.meta.url).href
const logoUrl = '/assets/logo.png'
const screenTint = '#D8E3EA'

function createLogoTexture(onReady: (texture: THREE.CanvasTexture) => void) {
  const image = new Image()
  image.crossOrigin = 'anonymous'
  image.onload = () => {
    const canvas = document.createElement('canvas')
    canvas.width = 2048
    canvas.height = 1280

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'

    ctx.fillStyle = screenTint
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const sourceCanvas = document.createElement('canvas')
    sourceCanvas.width = image.width
    sourceCanvas.height = image.height
    const sourceCtx = sourceCanvas.getContext('2d')
    if (!sourceCtx) return

    sourceCtx.drawImage(image, 0, 0)
    const pixels = sourceCtx.getImageData(0, 0, image.width, image.height).data
    let minX = image.width
    let minY = image.height
    let maxX = 0
    let maxY = 0

    for (let y = 0; y < image.height; y += 1) {
      for (let x = 0; x < image.width; x += 1) {
        const alpha = pixels[(y * image.width + x) * 4 + 3]
        if (alpha > 8) {
          minX = Math.min(minX, x)
          minY = Math.min(minY, y)
          maxX = Math.max(maxX, x)
          maxY = Math.max(maxY, y)
        }
      }
    }

    const cropWidth = Math.max(1, maxX - minX + 1)
    const cropHeight = Math.max(1, maxY - minY + 1)
    const maxWidth = canvas.width * 0.9
    const maxHeight = canvas.height * 0.64
    const ratio = Math.min(maxWidth / cropWidth, maxHeight / cropHeight)
    const width = cropWidth * ratio
    const height = cropHeight * ratio
    const x = (canvas.width - width) / 2
    const y = (canvas.height - height) / 2

    ctx.drawImage(image, minX, minY, cropWidth, cropHeight, x, y, width, height)

    const texture = new THREE.CanvasTexture(canvas)
    texture.colorSpace = THREE.SRGBColorSpace
    texture.flipY = false
    texture.anisotropy = 16
    texture.magFilter = THREE.LinearFilter
    texture.minFilter = THREE.LinearMipmapLinearFilter
    texture.generateMipmaps = true
    texture.needsUpdate = true
    onReady(texture)
  }
  image.src = logoUrl
}

function makeMaterialOpaque(material: THREE.Material | THREE.Material[]) {
  const materials = Array.isArray(material) ? material : [material]

  materials.forEach((item) => {
    item.transparent = false
    item.depthWrite = true
    item.alphaTest = 0

    if ('opacity' in item) {
      ;(item as THREE.Material & { opacity: number }).opacity = 1
    }

    if ('map' in item && item.map instanceof THREE.Texture) {
      item.map.anisotropy = Math.max(item.map.anisotropy, 8)
      item.map.needsUpdate = true
    }

    item.needsUpdate = true
  })
}

export default function HeroModel() {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return undefined

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
    camera.position.set(0.15, 1.15, 5.15)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      precision: 'highp',
      powerPreference: 'high-performance',
      preserveDrawingBuffer: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 3))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.18
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
      opacity: 1,
      transparent: false,
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
        makeMaterialOpaque(child.material)

        if (/monitor-screen|screen|plane/i.test(child.name) || /screen|plane/i.test(child.geometry.name)) {
          child.material = screenMaterial
          child.renderOrder = 2
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
    </div>
  )
}
