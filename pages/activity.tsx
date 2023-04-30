import { Inter } from 'next/font/google'
import * as THREE from 'three'
import { useEffect, useRef } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Activity() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const width = window.innerWidth/1.5
        const height = window.innerHeight/1.5
        
        // Set up the scene, camera, and renderer
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current })
        renderer.setSize(width, height)

        // Add a cube to the scene
        const geometry = new THREE.BoxGeometry()
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)

        // Move the camera back so we can see the cube
        camera.position.z = 5

        // Render the scene
        function render() {
        requestAnimationFrame(render)
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
        renderer.render(scene, camera)
        }
        render()
    }, [])
    
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <canvas ref={canvasRef}></canvas>
        </main>
    )
}