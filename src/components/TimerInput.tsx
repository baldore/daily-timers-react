import { useState } from 'react'
import styled from 'styled-components'

const VisuallyHidden = styled.div({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
})

const InputContainer = styled.div({
  display: 'block',
  marginBottom: '10px',
})

const TimerLabel = styled.label({
  display: 'block',
})

const FormattedInput = styled.label<{ focus?: boolean }>((props) => ({
  display: 'inline-block',
  border: `1px solid ${props.focus ? '#03a9f4' : 'black'}`,
  borderRadius: 2,
  padding: '10px 20px',
  userSelect: 'none',
}))

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
  const [focus, setFocus] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, '')
    if (value.length <= 6) {
      setInput(value)
    }
  }

  return (
    <InputContainer>
      <TimerLabel htmlFor="timer">Add a new timer</TimerLabel>
      <VisuallyHidden>
        <input
          type="text"
          id="timer"
          value={input}
          onChange={onChange}
          pattern="[0-9]+"
          maxLength={6}
          autoComplete="off"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </VisuallyHidden>
      <FormattedInput focus={focus} htmlFor="timer">
        {formatInput(input)}
      </FormattedInput>
    </InputContainer>
  )
}

export default TimerInput
