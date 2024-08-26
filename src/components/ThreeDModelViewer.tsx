"use client";

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

interface ModelProps {
  modelUrl: string;
}

const Model: React.FC<ModelProps> = ({ modelUrl }) => {
  const { scene } = useGLTF(modelUrl);

  return <primitive object={scene} />;
};

const ThreeDModelViewer: React.FC<{ modelUrl: string }> = ({ modelUrl }) => {
  return (
    <Canvas style={{ height: '500px', width: '100%' }}>
      <ambientLight />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Model modelUrl={modelUrl} />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDModelViewer;
