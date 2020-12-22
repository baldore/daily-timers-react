import styled from 'styled-components'
import Head from 'next/head'
import Timer from '../components/Timer'

const Container = styled.main({
  padding: '0 16px',
})

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Daily timers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1>Choose your timer</h1>
        <Timer />
      </Container>
    </>
  )
}
