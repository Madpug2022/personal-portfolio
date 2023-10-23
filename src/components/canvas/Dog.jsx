import { Suspense, } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from '../Loader'

const Dog = () => {
  const dog = useGLTF('./pug/scene.gltf')


  return (
    <mesh>
      <hemisphereLight intensity={0.6} groundColor='black' />
      <directionalLight
        position={[0, 10, 180]}
        intensity={0.8}
      />
      <pointLight intensity={1} />
      <primitive
        object={dog.scene}
      />
    </mesh>

  )
}

const DogCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"

      gl={{ preserveDrawingBuffer: true }}
      camera={{
        near: 0.025,
        position: [0, 0, -220],
      }}>
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Dog />
      </Suspense>
    </Canvas>
  )
}

export default DogCanvas
