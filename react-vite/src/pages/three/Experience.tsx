import Lights from '@/pages/three/element/Lights.tsx'
import { Level } from '@/pages/three/element/Level.tsx'
import { Physics } from '@react-three/rapier'
import Player from '@/pages/three/element/Player.tsx'
import useGame from '@/pages/three/useGame.ts'

function Experience() {
  const blocksCount = useGame(state => state.blocksCount)
  const blocksSeep = useGame(state => state.blocksSeep)

  return <>
    <Physics>
      <Lights/>
      <Level count={blocksCount} seep={blocksSeep}/>
      <Player/>
    </Physics>
  </>
}

export default Experience
