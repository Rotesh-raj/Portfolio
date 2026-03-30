import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Float, Text, Sparkles } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import * as THREE from 'three'

// 🔥 Tech Orb with smooth motion + parallax
const TechOrb = ({ text, position, color }) => {
  const meshRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // Smooth floating + rotation
    meshRef.current.rotation.y += 0.01
    meshRef.current.rotation.x += 0.005

    // 🧠 Mouse parallax
    meshRef.current.position.x = position[0] + state.mouse.x * 0.8
    meshRef.current.position.y = position[1] + state.mouse.y * 0.5 + Math.sin(t) * 0.2
  })

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.45, 64, 64]} />
        <meshPhysicalMaterial
          color={color}
          metalness={1}
          roughness={0.05}
          clearcoat={1}
          emissive={color}
          emissiveIntensity={0.5}
        />
        <Text
          position={[0, 0, 0.55]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
      </mesh>
    </Float>
  )
}

const Hero3D = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="absolute inset-0 z-0"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        {/* 🔥 Cinematic Lighting */}
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#6366f1" />

        {/* 🌌 Premium Stars */}
        <Stars
          radius={150}
          depth={80}
          count={8000}
          factor={6}
          fade
          speed={1.2}
        />

        {/* ✨ Floating Particles */}
        <Sparkles count={200} scale={12} size={1.2} speed={0.4} />

        {/* 🧠 Floating Tech Orbs */}
        <TechOrb text="JS" position={[2, 1, 0]} color="#facc15" />
        <TechOrb text="React" position={[-2, 1.5, 0]} color="#38bdf8" />
        <TechOrb text="Node" position={[1.5, -1.5, 0]} color="#22c55e" />
        <TechOrb text="Java" position={[-1.5, -1, 0]} color="#f97316" />

        {/* 🎥 Smooth Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </motion.div>
  )
}

export default Hero3D