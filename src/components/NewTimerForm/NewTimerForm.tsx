import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
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
import addTimer from 'services/addTimer'

type FormData = {
  name: string
  hours: string
  minutes: string
}

function NewTimerForm(): JSX.Element {
  const { register, handleSubmit, errors, reset } = useForm<FormData>()
  const router = useRouter()

  const onSubmit = handleSubmit(async (data) => {
    const timerAdded = await addTimer({
      name: data.name,
      hours: parseInt(data.hours),
      minutes: parseInt(data.minutes),
    })
    reset()

    if (timerAdded) {
      router.push('/timers')
    }
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
          <FormLabel>Timer (hh:mm)</FormLabel>
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
