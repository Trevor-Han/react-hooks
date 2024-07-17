import { useRef } from 'react'
import { Group, Mesh } from 'three'
import { useFrame } from '@react-three/fiber'
import { TransformControls, PivotControls, Html, Text, Float, MeshReflectorMaterial } from '@react-three/drei'
// import CustomObject from './CustomObject'

function Experience() {
  const cubeRef = useRef<Mesh>(null)
  const sphere = useRef<Mesh>(null)
  const groupRef = useRef<Group>(null)
  useFrame(() => {
    // (_state, _delta)
    if (cubeRef.current && groupRef.current) {
      // 控制相机选旋转
      // const angle = state.clock.elapsedTime
      // state.camera.position.x = Math.sin(angle) * 8
      // state.camera.position.z = Math.cos(angle) * 8
      // state.camera.lookAt(0, 0, 0)

      // cubeRef.current.rotation.y += delta
      // groupRef.current.rotation.y += delta
    }
  })
  return <>
    <directionalLight position={[1, 2, 3]} intensity={ 1.5 }/>
    <ambientLight intensity={0.5} />
    <group ref={groupRef}>

      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={2}
        axisColors={['red', 'green', 'blue']}
        scale={ 1 }
      >
        <mesh ref={sphere} position-x={-2}>
          <sphereGeometry/>
          <meshStandardMaterial color='orange'/>
          <Html
            wrapperClass='label'
            position={[1, 1, 0]}
            center
            distanceFactor={6}
            occlude={[sphere, cubeRef]}
          >sphereGeometry is Mesh</Html>
        </mesh>
      </PivotControls>

      <TransformControls position-x={2}>
        <mesh ref={cubeRef} scale={1.5}>
          <boxGeometry/>
          <meshStandardMaterial color='mediumpurple'/>
        </mesh>
      </TransformControls>

    </group>

    <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
      <planeGeometry/>
      {/* <meshStandardMaterial color='greenyellow'/>*/}
      <MeshReflectorMaterial
        mirror={ 0.5 }
        resolution={ 512 }
        blur={ [1000, 1000] }
        mixBlur={ 1 }
        color='greenyellow'
      />
    </mesh>

    <Float speed={ 5 } floatIntensity={ 2 }>
      <Text
        fontSize={ 1 }
        color='salmon'
        position-y={ 2 }
        maxWidth={ 10 }
        textAlign='center'
      >Geometry</Text>
    </Float>

  </>
}

export default Experience
