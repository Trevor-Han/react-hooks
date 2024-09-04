import { BoxGeometry, Euler, MeshStandardMaterial, Quaternion, Vector3 } from 'three'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useMemo, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { RapierRigidBody } from '@react-three/rapier/dist/declarations/src/types'

const boxGeometry = new BoxGeometry(1, 1, 1)
const floor1Material = new MeshStandardMaterial({ color: 'limegreen' })
const floor2Material = new MeshStandardMaterial({ color: 'greenyellow' })
const obstacleMaterial = new MeshStandardMaterial({ color: 'orangered' })
const wallMaterial = new MeshStandardMaterial({ color: 'slategrey' })

function BlockStart({ position = [0, 0, 0] }) {
  return <group position={new Vector3(position[0], position[1], position[2])}>
    <mesh geometry={boxGeometry} material={floor1Material} position={[0, -0.1, 0]} receiveShadow scale={[4, 0.2, 4]}>
    </mesh>
  </group>
}
function BlockEnd({ position = [0, 0, 0] }) {
  return <group position={new Vector3(position[0], position[1], position[2])}>
    <mesh geometry={boxGeometry} material={floor1Material} position={[0, 0, 0]} receiveShadow scale={[4, 0.2, 4]}>
    </mesh>
  </group>
}

export function BlockSpinner({ position = [0, 0, 0] }) {
  const [speed] = useState(() => (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1))
  const obstacle = useRef<RapierRigidBody>(null)
  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    const eulerRotation = new Euler(0, time * speed, 0)
    const quaternionRotation = new Quaternion()
    quaternionRotation.setFromEuler(eulerRotation)

    if (obstacle.current) {
      obstacle.current.setNextKinematicRotation(quaternionRotation)
    }
  })
  return <group position={new Vector3(position[0], position[1], position[2])}>
    <mesh geometry={boxGeometry} material={floor2Material} position={[0, -0.1, 0]} receiveShadow scale={[4, 0.2, 4]}></mesh>
    <RigidBody ref={obstacle} type='kinematicPosition' position={[0, 0.3, 0]} restitution={0.2} friction={0}>
      <mesh geometry={boxGeometry} material={obstacleMaterial} scale={[3.5, 0.3, 0.3]} castShadow receiveShadow></mesh>
    </RigidBody>

  </group>
}
export function BlockLimbo({ position = [0, 0, 0] }) {
  const [timeOffset] = useState(() => Math.random() * Math.PI)
  const obstacle = useRef<RapierRigidBody>(null)
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    const y = Math.sin(time + timeOffset) + 1.15

    if (obstacle.current) {
      obstacle.current.setNextKinematicTranslation({ x: position[0], y: position[1] + y, z: position[2] })
    }
  })
  return <group position={new Vector3(position[0], position[1], position[2])}>
    <mesh geometry={boxGeometry} material={floor2Material} position={[0, -0.1, 0]} receiveShadow scale={[4, 0.2, 4]}></mesh>
    <RigidBody ref={obstacle} type='kinematicPosition' position={[0, 0.3, 0]} restitution={0.2} friction={0}>
      <mesh geometry={boxGeometry} material={obstacleMaterial} scale={[3.5, 0.3, 0.3]} castShadow receiveShadow></mesh>
    </RigidBody>

  </group>
}
export function BlockAxe({ position = [0, 0, 0] }) {
  const [timeOffset] = useState(() => Math.random() * Math.PI)
  const obstacle = useRef<RapierRigidBody>(null)
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    const x = Math.sin(time + timeOffset) * 1.25

    if (obstacle.current) {
      obstacle.current.setNextKinematicTranslation({ x: position[0] + x, y: position[1] + 0.75, z: position[2] })
    }
  })
  return <group position={new Vector3(position[0], position[1], position[2])}>
    <mesh geometry={boxGeometry} material={floor2Material} position={[0, -0.1, 0]} receiveShadow scale={[4, 0.2, 4]}></mesh>
    <RigidBody ref={obstacle} type='kinematicPosition' position={[0, 0.3, 0]} restitution={0.2} friction={0}>
      <mesh geometry={boxGeometry} material={obstacleMaterial} scale={[1.5, 1.5, 0.3]} castShadow receiveShadow></mesh>
    </RigidBody>

  </group>
}
function Bounds({ length = 1 }) {
  return <>
    <RigidBody type='fixed' restitution={0.2} friction={0}>
      <mesh
        position={[2.15, 0.75, -(length * 2) + 2]}
        geometry={boxGeometry}
        material={wallMaterial}
        scale={[0.3, 1.5, 4 * length]}
        castShadow
      />
      <mesh
        position={[-2.15, 0.75, -(length * 2) + 2]}
        geometry={boxGeometry}
        material={wallMaterial}
        scale={[0.3, 1.5, 4 * length]}
        receiveShadow
      />
      <mesh
        position={[0, 0.75, -(length * 4) + 2]}
        geometry={boxGeometry}
        material={wallMaterial}
        scale={[4, 1.5, 0.3]}
        receiveShadow
      />
      <CuboidCollider args={[2, 0.1, 2 * length]} position={[0, -0.1, -(length * 2) + 2]} restitution={0.2} friction={1}/>
    </RigidBody>
  </>
}

export function Level({ count = 5, types = [BlockSpinner, BlockLimbo, BlockAxe], seep = 0 }) {
  const blocks = useMemo(() => {
    const block = []
    for (let i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * types.length)]
      block.push(type)
    }
    return block
  }, [count, types, seep])
  return <>
    <BlockStart position={[0, 0, 0]}/>
    {blocks.map((Block, index) => <Block key={index} position={[0, 0, -(index + 1) * 4]}/>)}
    <BlockEnd position={[0, 0, -(count + 1) * 4]}/>
    <Bounds length={count + 2}/>
  </>
}

// export default Level
