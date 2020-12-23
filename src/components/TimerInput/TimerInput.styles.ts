import styled from 'styled-components'

export const VisuallyHidden = styled.div({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
})

export const InputContainer = styled.div({
  display: 'block',
  marginBottom: '10px',
})

export const TimerLabel = styled.label({
  display: 'block',
})

export const FormattedInput = styled.label<{ focus?: boolean }>((props) => ({
  display: 'inline-block',
  border: `1px solid ${props.focus ? '#03a9f4' : 'black'}`,
  borderRadius: 2,
  padding: '10px 20px',
  userSelect: 'none',
}))
