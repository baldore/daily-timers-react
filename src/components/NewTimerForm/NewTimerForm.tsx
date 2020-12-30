import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Container } from 'components/commonStyles/layout'
import TimerInput from 'components/TimerInput/TimerInput'

const Title = styled.h1({
  fontSize: 24,
})

function NewTimerForm(): JSX.Element {
  const [timer, setTimer] = useState('')

  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()
    console.log('yepppp')
  }

  return (
    <Container>
      <Title>New Timer</Title>
      <p>Add a new timer here!</p>
      <form onSubmit={onSubmit}>
        <TimerInput value={timer} onChange={setTimer} />
        <button type="submit">Create!</button>
      </form>
    </Container>
  )
}

export default NewTimerForm
