import Lights from '@/pages/three/element/Lights.tsx'
import { Level } from '@/pages/three/element/Level.tsx'
import { Physics } from '@react-three/rapier'
import Player from '@/pages/three/element/Player.tsx'

function Experience() {
  return <>
    <Physics>
      <Lights/>
      <Level/>
      {/* <Player/>*/}
    </Physics>
  </>
}

export default Experience
