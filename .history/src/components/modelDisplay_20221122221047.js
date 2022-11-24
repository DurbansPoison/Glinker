
// import { Suspense } from 'react';

import { Canvas} from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const DB9 = (args) => {
//   const gltf = useLoader(GLTFLoader, '../assets/models/db9-slim-diy.gltf');
//   return <primitive object={gltf.scene} {...args} />;
// };
const loader = new GLTFLoader();
loader.load( '../assets/models/db9-slim-diy.gltf', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

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
