import { useState } from 'react'
export default function useArray(defaultValue: any) {
  const [array, setArray] = useState(defaultValue)

  function push(element: any) {
    setArray((a: any) => [...a, element])
  }

  function filter(callback: any) {
    setArray((a: any[]) => a.filter(callback))
  }

  function update(index: number, newElement: any) {
    setArray((a: any[]) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length - 1)
    ])
  }

  function remove(index: number) {
    setArray((a: any[]) => [
      ...a.slice(0, index),
      ...a.slice(index + 1, a.length - 1)
    ])
  }

  function clear() {
    setArray([])
  }

  return { array, set: setArray, push, filter, update, remove, clear }
}

//
// const { array, set, push, remove, filter, update, clear } = useArray([
//   1, 2, 3, 4, 5, 6
// ])

//<div>{array.join(', ')}</div>
//<button onClick={() => push(7)}>Add 7</button>
//<button onClick={() => update(1, 9)}>Change Second Element To 9</button>
//<button onClick={() => remove(1)}>Remove Second Element</button>
//<button onClick={() => filter(n => n < 3)}>
// Keep Numbers Less Than 4
//</button>
//<button onClick={() => set([1, 2])}>Set To 1, 2</button>
//<button onClick={clear}>Clear</button>
