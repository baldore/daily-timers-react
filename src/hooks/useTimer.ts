import { useEffect, useRef, useState } from 'react'

type TimerOptions = {
  initialValue: number
  startOnInit?: boolean
}

/**
 * Add logic to control a timer.
 */
export default function useTimer({
  initialValue,
  startOnInit = false,
}: TimerOptions): {
  count: number
  isDone: boolean
  restartTimer: () => void
} {
  const [count, setCount] = useState(initialValue)
  const [isDone, setIsDone] = useState(false)
  const loop = useRef<number>()

  const timerFn = () => {
    setCount((oldCount) => oldCount - 1)
  }

  const restartTimer = () => {
    clearInterval(loop.current)
    setCount(initialValue)
    setIsDone(false)
    loop.current = setInterval(() => timerFn(), 1000)
  }

  useEffect(() => {
    if (count === 0) {
      setIsDone(true)
      clearInterval(loop.current)
    }
  }, [count])

  useEffect(() => {
    if (startOnInit) {
      loop.current = setInterval(() => timerFn(), 1000)
    }
    return () => clearInterval(loop.current)
  }, [])

  return { count, isDone, restartTimer }
}
