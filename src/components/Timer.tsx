import { useEffect } from 'react'
import useTimer from '../hooks/useTimer'

const promptAudio = '/assets/audio/prompt.mp3'

function notify() {
  if (Notification.permission !== 'granted') {
    return
  }

  const notification = new Notification('Finished timer: <label>', {
    body: 'ujuuuu',
    actions: [],
  })
  notification.onclick = function (e) {
    e.preventDefault()
    window.focus()
  }

  const audio = new Audio(promptAudio)
  audio.play()
}

function Timer(): JSX.Element {
  const { count, isDone, restartTimer } = useTimer({
    initialValue: 3,
  })

  useEffect(() => {
    if (isDone) {
      notify()
    }
  }, [isDone])

  return (
    <div>
      <div>{count}</div>
      {isDone && <h2>Done!</h2>}
      <button onClick={restartTimer}>Restart?</button>
    </div>
  )
}

export default Timer
