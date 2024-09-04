import { useKeyboardControls } from '@react-three/drei'
import useGame from '@/pages/three/useGame.ts'
import { useEffect, useRef } from 'react'
import { addEffect } from '@react-three/fiber'

function UIContainer() {
  const time = useRef<HTMLDivElement>(null)
  const restart = useGame(state => state.restart)
  const phase = useGame(state => state.phase)

  const forward = useKeyboardControls((state) => state.forward)
  const backward = useKeyboardControls((state) => state.backward)
  const leftward = useKeyboardControls((state) => state.leftward)
  const rightward = useKeyboardControls((state) => state.rightward)
  const jump = useKeyboardControls((state) => state.jump)

  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      const state = useGame.getState()
      let elapsedTime = 0

      if (state.phase === 'playing') {
        elapsedTime = Date.now() - Number(state.startTime)
      } else if (state.phase === 'end') {
        elapsedTime = Number(state.endTime) - Number(state.startTime)
      }
      elapsedTime /= 1000
      const gameTime = elapsedTime.toFixed(2)

      if (time.current) {
        time.current.textContent = gameTime
      }
    })
    return () => {
      unsubscribeEffect()
    }
  }, [])

  return <>
    <div className='interface'>
      <div ref={time} className='time'>0.0</div>
      {phase === 'end' && <div className='restart' onClick={restart}>ReStart</div>}
      <div className='key-controls'>
        <div className='raw'>
          <div className={`key ${forward ? 'active' : ''}`}></div>
        </div>
        <div className='raw'>
          <div className={`key ${leftward ? 'active' : ''}`}></div>
          <div className={`key ${backward ? 'active' : ''}`}></div>
          <div className={`key ${rightward ? 'active' : ''}`}></div>
        </div>
        <div className='raw'>
          <div className={`key large ${jump ? 'active' : ''}`}></div>
        </div>
      </div>
    </div>
  </>
}

export default UIContainer
