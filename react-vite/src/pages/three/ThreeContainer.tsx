import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './ThreeContainer.css'
import { ACESFilmicToneMapping, SRGBColorSpace } from 'three'
import Experience from './Experience'

function ThreeContainer() {
  return <div className='ThreeContainer'>
    <Canvas
      gl={{
        antialias: true,
        toneMapping: ACESFilmicToneMapping,
        outputColorSpace: SRGBColorSpace
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [3, 2, 6]
      }}
    >
      <Experience/>
      <OrbitControls makeDefault/>
    </Canvas>
  </div>
}

export default ThreeContainer
