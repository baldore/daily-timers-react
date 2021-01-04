import React from 'react'
import { useForm } from 'react-hook-form'
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
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

type FormData = {
  name: string
  hours: string
  minutes: string
}

function NewTimerForm(): JSX.Element {
  const { register, handleSubmit, errors } = useForm<FormData>()

  const onSubmit = handleSubmit((data) => {
    console.log('yepppp', data)
  })

  return (
    <Container>
      <Stack as="form" spacing="12px" onSubmit={onSubmit}>
        <Heading size="2xl" mt="5">
          New Timer
        </Heading>
        <p>Add a new timer here!</p>

        <FormControl id="name" isInvalid={Boolean(errors.name)}>
          <FormLabel>Name</FormLabel>
          <Input name="name" ref={register({ required: true })} type="text" />
          <FormErrorMessage>Name is required.</FormErrorMessage>
        </FormControl>

        <FormControl id="timer">
          <FormLabel>Timer</FormLabel>
          <HStack>
            <NumberInput defaultValue={0} min={0} max={59}>
              <NumberInputField name="hours" ref={register} maxW="70px" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <NumberInput defaultValue={0} min={0} max={59}>
              <NumberInputField name="minutes" ref={register} maxW="70px" />
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
