import styled from 'styled-components'

const InputContainer = styled.label({
  display: 'block',
  marginBottom: '10px',
})

const TimerLabel = styled.span({
  display: 'block',
})

function TimerInput(): JSX.Element {
  return (
    <InputContainer htmlFor="timer">
      <TimerLabel>Add a new timer</TimerLabel>
      <input type="text" id="timer" />
    </InputContainer>
  )
}

export default TimerInput
