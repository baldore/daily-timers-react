import { useEffect, useRef, useState } from 'react'

function useTimer(initialValue: number) {
  const [count, setCount] = useState(initialValue)
  const [isDone, setIsDone] = useState(false)
  const loop = useRef<number>()

  const timerFn = () => {
    if (isDone) return

    const newCount = count - 1
    setCount(newCount)
    if (newCount === 0) {
      setIsDone(true)
      clearInterval(loop.current)
    }
  }

  const restartTimer = () => {
    clearInterval(loop.current)
    setCount(initialValue)
    setIsDone(false)
    loop.current = setInterval(timerFn, 1000)
  }

  useEffect(() => {
    loop.current = setInterval(timerFn, 1000)
    return () => clearInterval(loop.current)
  }, [count])

  return { count, isDone, restartTimer }
}

function Timer() {
  const { count, isDone, restartTimer } = useTimer(3)

  return (
    <div>
      <div>{count}</div>
      {isDone && <h2>Done!</h2>}
      <button onClick={restartTimer}>Restart?</button>
    </div>
  )
}

export default Timer
