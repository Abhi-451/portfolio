import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

function Scene() {
  const starsRef = useRef<THREE.Group>(null);
  const { camera } = useThree();

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.x += 0.0002;
      starsRef.current.rotation.y += 0.0002;
    }

    // Move camera forward based on scroll
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = maxScroll > 0 ? scrollY / maxScroll : 0;
    
    // Move camera forward as you scroll down
    camera.position.z = -scrollFraction * 50;
    // Add subtle camera rotation
    camera.rotation.z = scrollFraction * Math.PI * 0.25;
  });

  return (
    <group ref={starsRef}>
      <Stars radius={100} depth={50} count={5000} factor={5} saturation={1} fade speed={1.5} />
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 w-full h-full -z-50 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #0a001a, #000000)' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
