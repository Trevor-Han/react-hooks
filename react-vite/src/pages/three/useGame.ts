import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

interface GameState {
  blocksCount: number;
  blocksSeep: number;
  isRunning: boolean;
  phase: 'ready' | 'playing' | 'end';
  startTime: number | Date;
  endTime: number | Date;
}

interface GameActions {
  start: () => void;
  restart: () => void;
  end: () => void;
}

type UseGameStore = GameState & GameActions;

const useGame = create(subscribeWithSelector<UseGameStore>((setState, getState) => ({
  blocksCount: 3,
  blocksSeep: 0,
  isRunning: false,
  phase: 'ready',
  startTime: 0,
  endTime: 0,
  start: () => {
    if (getState().phase === 'ready') {
      setState({ phase: 'playing', startTime: new Date() })
    }
  },
  restart: () => {
    if (getState().phase === 'playing' || getState().phase === 'end') {
      setState({ phase: 'ready' })
    }
  },
  end: () => {
    if (getState().phase === 'playing') {
      setState({ phase: 'end', endTime: new Date() })
    }
  }
})))
export default useGame
