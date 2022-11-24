
import { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const DB9 = (args) => {
//   const gltf = useLoader(GLTFLoader, '../assets/models/db9-slim-diy.gltf');
//   return <primitive object={gltf.scene} {...args} />;
// };


function ModelDisplay() {
  return (
    <Canvas style={{ height: '10em' }}>
      <Suspense fallback={null}>
        <DB9 />
      </Suspense>
    </Canvas>
  );
}

export default ModelDisplay;
