import { useEffect, useMemo, useRef } from 'react'
import { BufferGeometry, DoubleSide } from 'three'

export default function CustomObject() {
  const geometryRef = useRef<BufferGeometry>(null)
  const count:number = 10 * 3
  const positions = useMemo<Float32Array>(() => {
    const positions:Float32Array = new Float32Array(count * 3)

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 3
    }
    return positions
  }, [count])

  useEffect(() => {
    geometryRef.current && geometryRef.current.computeVertexNormals()
  }, [])

  return <>
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach='attributes-position'
          count={count}
          itemSize={3}
          array={positions}/>
      </bufferGeometry>
      <meshStandardMaterial color='red' side={DoubleSide}/>
    </mesh>
  </>
}
