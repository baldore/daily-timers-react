import useTimer from '../hooks/useTimer'

function Timer(): JSX.Element {
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
