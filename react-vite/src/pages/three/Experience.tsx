import { useRef } from 'react'
import { Group, Mesh } from 'three'
import { useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

// import { Perf } from 'r3f-perf'// 性能监控

function Experience() {
  const cubeRef = useRef<Mesh>(null)
  const sphere = useRef<Mesh>(null)
  const groupRef = useRef<Group>(null)

  useFrame((_state, delta) => {
    if (cubeRef.current && groupRef.current) {
      cubeRef.current.rotation.y += delta
    }
  })
  return <>
    <Environment files={'../assets/model/sky.hdr'} background/>
    <color args={['lightskyblue']} attach='background'/>
    {/* <Perf position='top-left' />*/}
    <directionalLight castShadow position={[1, 2, 3]} intensity={ 1.5 }/>
    <ambientLight intensity={0.5} />
    <group ref={groupRef}>

      <mesh ref={sphere} castShadow position-x={-2}>
        <sphereGeometry/>
        <meshStandardMaterial color='orange'/>
      </mesh>

      <mesh ref={cubeRef} castShadow scale={1.5} position={ [2, 0, 0] }>
        <boxGeometry/>
        <meshStandardMaterial color='mediumpurple'/>
      </mesh>

    </group>

    <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
      <planeGeometry/>
      <meshStandardMaterial color='greenyellow'/>
    </mesh>
  </>
}

export default Experience
