import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import { suspend } from "../lib/suspendCache";
import { generateAndDownloadSTL, generateAndDownloadDXF } from "../lib/convertToSTL";

const Model = ({ modelPath }) => {
  const gltf = suspend(useGLTF, [modelPath]);
  return <primitive object={gltf.scene} scale={1.2} />;
};

const ARPreview = ({ modelPath = "/models/sample-ring.glb", pieceType = "ring" }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-full h-[480px] sm:w-3/4 rounded-lg overflow-hidden border border-accent-gold">
        {/* ✅ Added Suspense fallback to prevent pending Promise from throwing */}
        <Suspense fallback={<div className="text-gray-400 mt-20">در حال بارگذاری مدل...</div>}>
          <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} />
            <Model modelPath={modelPath} />
            <OrbitControls enableZoom={true} />
            <Environment preset="studio" />
          </Canvas>
        </Suspense>
      </div>

      <div className="flex gap-6 mt-6">
        <button
          onClick={() => generateAndDownloadSTL(pieceType)}
          className="px-6 py-2 border border-accent-gold text-accent-gold rounded-md hover:bg-accent-gold hover:text-black transition"
        >
          خروجی STL
        </button>
        <button
          onClick={() => generateAndDownloadDXF(pieceType)}
          className="px-6 py-2 border border-accent-gold text-accent-gold rounded-md hover:bg-accent-gold hover:text-black transition"
        >
          خروجی DXF
        </button>
      </div>
    </div>
  );
};

export default ARPreview;
