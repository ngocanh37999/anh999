import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from 'src/slice/counter/counter.slice'
import { RootState } from 'src/store'

export default function Counter() {
  // const count = useSelector(state => state.counter.count)
  // console.log(count)
  const dispatch = useDispatch()

  //   decrease(payload: any): {
  //     payload: any;
  //     type: string;
  // }

  const count = useSelector((state: RootState) => state.counter.count)

  return (
    <div>
      <button onClick={() => dispatch(decrease())}>Giảm</button>
      <div>{count}</div>
      <button onClick={() => dispatch(increase())}>Tăng</button>
    </div>
  )
}
