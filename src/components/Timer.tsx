import { useEffect } from 'react'
import useTimer from '../hooks/useTimer'
import { notify } from '../utils/notification'
import { secondsToTime } from '../utils/time'
import TimerInput from './TimerInput'

function Timer(): JSX.Element {
  const { count, isDone, restartTimer } = useTimer({
    initialValue: 300,
  })
  const { hours, minutes, seconds } = secondsToTime(count)

  useEffect(() => {
    if (isDone) {
      notify()
    }
  }, [isDone])

  return (
    <div>
      <TimerInput />
      <div>
        {hours}:{minutes}:{seconds}
      </div>
      {isDone && <h2>Done!</h2>}
      <button onClick={restartTimer}>Restart?</button>
    </div>
  )
}

export default Timer
