import React, { useState } from 'react'
import {
  FormattedInput,
  InputContainer,
  TimerLabel,
  VisuallyHidden,
} from './TimerInput.styles'

type Props = {
  value?: string
  onChange?: (value: string) => void
}

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
function TimerInput({ value, onChange }: Props): JSX.Element {
  const [focus, setFocus] = useState(false)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^\d]/g, '')
    if (newValue.length <= 6) {
      onChange(newValue)
    }
  }

  return (
    <InputContainer>
      <TimerLabel htmlFor="timer">Add a new timer</TimerLabel>
      <VisuallyHidden>
        <input
          type="text"
          id="timer"
          value={value}
          onChange={onChangeHandler}
          pattern="[0-9]+"
          maxLength={6}
          autoComplete="off"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </VisuallyHidden>
      <FormattedInput focus={focus} htmlFor="timer">
        {formatInput(value)}
      </FormattedInput>
    </InputContainer>
  )
}

export default TimerInput
