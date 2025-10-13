// File: src/components/ARPreview.jsx
// FINAL ADVANCED VERSION – Phase 3.3 (Sharif Gold AR Enhancement)

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Html, useGLTF } from '@react-three/drei';

// --- Component: 3D Model with smooth rotation ---
const RotatingModel = ({ modelPath }) => {
  const ref = useRef();
  const { scene } = useGLTF(modelPath);

  // Smooth rotation when idle
  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.25;
  });

  return <primitive ref={ref} object={scene} scale={1.3} />;
};

// --- Main AR Preview Component ---
const ARPreview = ({ modelPath = '/models/sample-ring.glb', label = 'پیش‌نمایش سه‌بعدی فلز' }) => {
  return (
    <div className="bg-[#0C0C0C] rounded-xl overflow-hidden border border-accent-gold/50 shadow-lg shadow-black/40 mx-auto my-8 max-w-3xl p-2">
      <Canvas camera={{ position: [0, 0.8, 2.2], fov: 45 }}>
        {/* Soft ambient and directional light for luxury tone */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[2, 4, 3]}
          intensity={1.4}
          color="#C4A484"
          castShadow
        />
        <directionalLight position={[-3, -2, -2]} intensity={0.6} />

        {/* Environment for realistic metallic reflections */}
        <Environment preset="studio" />

        {/* Actual rotating preview */}
        <RotatingModel modelPath={modelPath} />

        {/* OrbitControls for user interaction */}
        <OrbitControls
          enablePan={false}
          autoRotate={false}
          enableZoom={true}
          minDistance={1.5}
          maxDistance={3.5}
        />

        {/* Label overlay */}
        <Html position={[0, -1.5, 0]} center>
          <div className="text-gray-300 text-sm font-vazirmatn tracking-wide mt-4 backdrop-blur-sm bg-black/30 px-3 py-1 rounded-full border border-accent-gold/30">
            {label}
          </div>
        </Html>
      </Canvas>

      {/* Description below canvas */}
      <div className="text-center mt-5 mb-3">
        <p className="text-sm text-gray-400 font-vazirmatn">
          چرخش، بازتاب و نور واقعی بر اساس متریال انتخابی فلز شبیه‌سازی شده است.
        </p>
      </div>
    </div>
  );
};

export default ARPreview;
