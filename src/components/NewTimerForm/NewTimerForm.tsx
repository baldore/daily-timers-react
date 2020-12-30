import React, { useReducer, useState } from 'react'
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
} from '@chakra-ui/react'

/**
 * Old setState like hook
 */
function useSetState<T>(initialState: T) {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState
  )

  return [state, setState]
}

function NewTimerForm(): JSX.Element {
  const [timer, setTimer] = useSetState({ foo: '' })

  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()
    console.log('yepppp')
  }

  return (
    <Container>
      <Stack as="form" spacing="12px" onSubmit={onSubmit}>
        <Heading size="2xl" mt="5">
          New Timer
        </Heading>
        <p>Add a new timer here!</p>

        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl id="timer">
          <FormLabel>Timer</FormLabel>
          <HStack>
            <NumberInput defaultValue={0} min={0} max={59}>
              <NumberInputField maxW="70px" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <NumberInput defaultValue={0} min={0} max={59}>
              <NumberInputField maxW="70px" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </HStack>
        </FormControl>

        <Button type="submit">Create!</Button>
      </Stack>
    </Container>
  )
}

export default NewTimerForm
