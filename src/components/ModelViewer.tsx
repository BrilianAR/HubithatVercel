import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

interface ModelViewerProps {
  modelPath: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);

  return (
    <Canvas style={{ height: "500px", width: "100%" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <primitive object={scene} scale={1.5} />
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;