
import { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const FreeFarm = (args) => {
  const gltf = useLoader(GLTFLoader, '../assets/models/.gltf');
  return <primitive object={gltf.scene} {...args} />;
};

function ModelDisplay() {
  return (
    <Canvas style={{ height: '100vh' }}>
      <Suspense fallback={null}>
        <FreeFarm />
      </Suspense>
    </Canvas>
  );
}

export default ModelDisplay;
