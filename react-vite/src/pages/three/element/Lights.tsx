import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { DirectionalLight, Vector3, Object3D } from 'three'

function Lights() {
  const light = useRef<DirectionalLight>(null)
  useFrame((state) => {
    if (light.current) {
      const position = light.current.position as Vector3
      const target = light.current.target as Object3D
      position.z = state.camera.position.z + 1
      target.position.z = state.camera.position.z
      target.updateMatrix()
    }
  })
  return <>
    <color args={['lightskyblue']} attach='background'/>

    <directionalLight
      ref={light}
      castShadow
      position={[4, 4, 1]}
      intensity={ 1.5 }
      shadow-mapSize={[1024, 1024]}
      shadow-camera-near={1}
      shadow-camera-far={10}
      shadow-camera-top={10}
      shadow-camera-right={10}
      shadow-camera-bottom={-10}
      shadow-camera-left={-10}
    />
    <ambientLight intensity={0.5} />
  </>
}
export default Lights
