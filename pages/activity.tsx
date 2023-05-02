import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import { Canvas } from '@react-three/fiber'
import Box from '../components/Box'

const inter = Inter({ subsets: ['latin'] })

export default function Activity() {
    const [dpr, setDpr] = useState(1)
    useEffect(() => {
        setDpr(window.devicePixelRatio)
    }, [])

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <Canvas dpr={dpr}>
                <ambientLight intensity={1.5} />
                <directionalLight color="red" position={[5, 5, 5]} />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-3, 1, 0]} />
                <Box position={[3, -1, 0]} />
            </Canvas>
        </main>
    )
}