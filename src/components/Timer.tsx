import { useEffect, useState } from 'react'

const time = 10 // 10 seconds

function useTimer(initialValue: number) {
  const [count, setCount] = useState(initialValue)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isDone) return

      const newCount = count - 1
      if (newCount > 0) {
        setCount(newCount)
      } else {
        setCount(0)
        setIsDone(true)
        clearInterval(interval)
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [count])

  return { count, isDone }
}

function Timer() {
  const { count, isDone } = useTimer(10)

  return (
    <div>
      <div>{count}</div>
      {isDone && <h2>Done!</h2>}
    </div>
  )
}

export default Timer
