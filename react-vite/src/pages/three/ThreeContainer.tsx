import { Canvas } from '@react-three/fiber'
import { KeyboardControls, KeyboardControlsEntry, OrbitControls } from '@react-three/drei'
import './ThreeContainer.css'
import { ACESFilmicToneMapping, SRGBColorSpace } from 'three'
import Experience from './Experience'
import { useMemo } from 'react'
import UIContainer from './element/UIContainer.tsx'

function ThreeContainer() {
  const map = useMemo<KeyboardControlsEntry[]>(() => [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
    { name: 'jump', keys: ['Space'] }
  ], [])
  return <div className='ThreeContainer'>
    <KeyboardControls map={map}>
      <Canvas
        shadows
        gl={{
          antialias: true,
          toneMapping: ACESFilmicToneMapping,
          outputColorSpace: SRGBColorSpace
        }}
        camera={{
          fov: 75,
          near: 0.1,
          far: 200,
          position: [2.5, 4, 6]
        }}
      >
        <Experience/>
        <OrbitControls makeDefault/>
      </Canvas>
      <UIContainer/>
    </KeyboardControls>
  </div>
}
export default ThreeContainer
