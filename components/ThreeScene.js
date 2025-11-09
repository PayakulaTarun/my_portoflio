import { useEffect, useRef } from 'react'

export default function ThreeScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 768) return

    let scene, camera, renderer, shapes = []
    let animationId

    const init = () => {
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: false,
        powerPreference: 'high-performance'
      })
      renderer.setSize(300, 300)
      renderer.setClearColor(0x000000, 0)
      
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement)
      }

      // Create fewer, optimized shapes
      for (let i = 0; i < 8; i++) {
        const geometry = new THREE.OctahedronGeometry(0.1)
        const material = new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0x00d4ff : 0x8b5cf6,
          wireframe: true,
          transparent: true,
          opacity: 0.4
        })
        
        const shape = new THREE.Mesh(geometry, material)
        shape.position.set(
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4
        )
        
        shapes.push(shape)
        scene.add(shape)
      }

      camera.position.z = 3

      const animate = () => {
        animationId = requestAnimationFrame(animate)

        shapes.forEach((shape, index) => {
          shape.rotation.x += 0.005
          shape.rotation.y += 0.005
          shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.0005
        })

        renderer.render(scene, camera)
      }

      animate()
    }

    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
    script.onload = init
    document.head.appendChild(script)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (mountRef.current && renderer) {
        mountRef.current.removeChild(renderer.domElement)
        renderer.dispose()
      }
      shapes.forEach(shape => {
        if (shape.geometry) shape.geometry.dispose()
        if (shape.material) shape.material.dispose()
      })
      try {
        document.head.removeChild(script)
      } catch (e) {}
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        pointerEvents: 'none',
        opacity: 0.6
      }}
    />
  )
}