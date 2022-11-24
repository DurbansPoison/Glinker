
import { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const FreeFarm = (args) => {
  const gltf = useLoader(GLTFLoader, './free_farm/scene.gltf');
  return <primitive object={gltf.scene} {...args} />;
};

function App() {
  return (
    <Canvas style={{ height: '100vh' }}>
      <Suspense fallback={null}>
        <FreeFarm />
      </Suspense>
    </Canvas>
  );
}

export default ModelDisplay;
