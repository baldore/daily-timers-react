import { useState } from 'react'
import styled from 'styled-components'

const InputContainer = styled.label({
  display: 'block',
  marginBottom: '10px',
})

const TimerLabel = styled.span({
  display: 'block',
})

/**
 * Formats the hidden input to look like XX:XX:XX
 */
function formatInput(input: string): string {
  const padded = input.padStart(6, '000000')
  const hh = padded.substr(0, 2)
  const mm = padded.substr(2, 2)
  const ss = padded.substr(4, 2)

  return `${hh}:${mm}:${ss}`
}

/**
 * This input only allows numbers and backspace to delete.
 * Cursor is not available at the moment
 */
function TimerInput(): JSX.Element {
  const [input, setInput] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, '')
    if (value.length <= 6) {
      setInput(value)
    }
  }

  return (
    <InputContainer htmlFor="timer">
      <TimerLabel>Add a new timer</TimerLabel>
      <input
        type="text"
        id="timer"
        value={input}
        onChange={onChange}
        pattern="[0-9]+"
        maxLength={6}
        autoComplete="off"
      />
      {/* actual output */}
      <label htmlFor="timer">{formatInput(input)}</label>
    </InputContainer>
  )
}

export default TimerInput
