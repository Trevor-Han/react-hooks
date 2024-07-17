
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './text.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '@/store/festures/user.ts'
import type { RootState } from '@/store'

function Text() {
  // const [count, setCount] = useState(0)
  const { value } = useSelector((state:RootState) => state.user)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => dispatch(increment())}> + </button>
        <span> count is {value}</span>
        <button onClick={() => dispatch(decrement())}> - </button>
      </div>
    </>
  )
}

export default Text
