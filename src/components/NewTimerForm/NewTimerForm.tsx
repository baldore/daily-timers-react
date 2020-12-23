import React, { useState } from 'react'
import { Container } from 'components/commonStyles/layout'
import TimerInput from 'components/TimerInput/TimerInput'

function NewTimerForm(): JSX.Element {
  const [timer, setTimer] = useState('')

  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()
    console.log('yepppp')
  }

  return (
    <Container>
      <h1>New Timer</h1>
      <p>Add a new timer here!</p>
      <form onSubmit={onSubmit}>
        <TimerInput value={timer} onChange={setTimer} />
        <button type="submit">Create!</button>
      </form>
    </Container>
  )
}

export default NewTimerForm
