import styled from '@emotion/styled'
import { Container } from 'components/commonStyles/layout'
import Head from 'next/head'
import Link from 'next/link'

const Title = styled.h1({
  fontSize: 24,
})

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Daily timers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Title>Timers</Title>
        <Link href="/timers/new">
          <a>New timer</a>
        </Link>
      </Container>
    </>
  )
}
