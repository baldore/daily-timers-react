import { Container, Stack, Box, Heading, Button } from '@chakra-ui/react'
import Link from 'next/link'

function Timers(): JSX.Element {
  return (
    <Container>
      <Stack spacing="20px">
        <Heading>Timers</Heading>
        <Box>
          <Link href="/timers/new" passHref>
            <Button as="a">Add new timer</Button>
          </Link>
        </Box>
      </Stack>
    </Container>
  )
}

export default Timers
