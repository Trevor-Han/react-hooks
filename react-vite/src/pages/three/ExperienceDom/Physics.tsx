import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import {
  CuboidCollider,
  InstancedRigidBodies,
  InstancedRigidBodyProps,
  Physics,
  RigidBody
} from '@react-three/rapier'
import { Euler, Quaternion } from 'three'

function PhysicsEvent() {
  const cubesCount = 50
  const cube = useRef(null)
  const twister = useRef(null)
  const cubeJump = () => {
    if (cube.current) {
      const mass = cube.current!.mass()
            cube.current!.applyImpulse({ x: -5 * mass, y: 0, z: 0 })
            cube.current!.applyTorqueImpulse({
              x: Math.random() - 0.5,
              y: Math.random() - 0.5,
              z: Math.random() - 0.5
            })
    }
  }
  const collisionEnter = () => {}

  const instances = useMemo(() => {
    const instances: InstancedRigidBodyProps[] = []

    for (let i = 0; i < cubesCount; i++) {
      const scale = 0.2 + Math.random() * 0.8
      instances.push({
        key: 'instance_' + Math.random(),
        position: [(Math.random() - 0.5) * 8, 6 + i * 0.2, (Math.random() - 0.5) * 8],
        rotation: [Math.random(), Math.random(), Math.random()],
        scale: [scale, scale, scale]
      })
    }

    return instances
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    const eulerRotation = new Euler(0, time * 3, 0)
    const quaternionRotation = new Quaternion()
    quaternionRotation.setFromEuler(eulerRotation)

    const angle = time * 0.5
    const x = Math.cos(angle) * 2
    const z = Math.sin(angle) * 2
    if (twister.current) {
      twister.current.setNextKinematicRotation(quaternionRotation)
      twister.current.setNextKinematicTranslation({ x: x, y: -0.8, z: z })
    }
  })

  return <>
    <color args={['lightskyblue']} attach='background'/>

    <directionalLight castShadow position={[1, 2, 3]} intensity={ 1.5 }/>
    <ambientLight intensity={0.5} />

    <Physics>
      <RigidBody colliders='ball'>
        <mesh castShadow position={[-1.5, 3, 0]} scale={0.7}>
          <sphereGeometry/>
          <meshStandardMaterial color='orange'/>
        </mesh>
      </RigidBody>

      <RigidBody
        ref={cube}
        position={[1.5, 2, 0]}
        gravityScale={1}
        restitution={0}
        friction={0.7}
        colliders={false}
        onCollisionEnter={collisionEnter}
      >
        <mesh castShadow onClick={cubeJump}>
          <boxGeometry/>
          <meshStandardMaterial color='mediumpurple'/>
        </mesh>
        <CuboidCollider args={[0.5, 0.5, 0.5]} mass={0.5}/>
      </RigidBody>

      <RigidBody ref={twister} position={[0, -0.8, 0]} friction={0} type='kinematicPosition'>
        <mesh castShadow scale={[0.4, 0.4, 3]}>
          <boxGeometry/>
          <meshStandardMaterial color='red'/>
        </mesh>
      </RigidBody>

      <RigidBody type='fixed' friction={0.7}>
        <mesh receiveShadow position-y={-1.25}>
          <boxGeometry args={[10, 0.5, 10]}/>
          <meshStandardMaterial color='greenyellow'/>
        </mesh>
      </RigidBody>
      <RigidBody type='fixed'>
        {/* <CuboidCollider args={[5, 2, 0.5]} position={[0, 1, 5.5]}/>*/}
        {/* <CuboidCollider args={[5, 2, 0.5]} position={[0, 1, -5.5]}/>*/}
        {/* <CuboidCollider args={[0.5, 2, 5]} position={[5.5, 1, 0]}/>*/}
        {/* <CuboidCollider args={[0.5, 2, 5]} position={[-5.5, 1, 0]}/>*/}
        <mesh position-y={-5}>
          <boxGeometry args={[40, 0.5, 40]}/>
          <meshStandardMaterial color='greenyellow'/>
        </mesh>
      </RigidBody>

      <InstancedRigidBodies instances={instances}>
        <instancedMesh args={[undefined, undefined, cubesCount]} count={cubesCount}>
          <boxGeometry/>
          <meshStandardMaterial color='tomato'/>
        </instancedMesh>
      </InstancedRigidBodies>
    </Physics>
  </>
}

export default PhysicsEvent
