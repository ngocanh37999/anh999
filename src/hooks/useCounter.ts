import { useState } from 'react'

export default function useCounter(count: number, increaseCount: number) {
  const [counter, setCounter] = useState(count)
  const incrementCounter = () => setCounter(counter + increaseCount)
  return [counter, incrementCounter]
}

// const [counter, incrementCounter] = useCounter(0, 10)

//  <button onClick={incrementCounter}>{counter}</button>
