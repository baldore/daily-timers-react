import { Container } from 'components/commonStyles/layout'
import Head from 'next/head'
import Link from 'next/link'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Daily timers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1>Timers</h1>
        <Link href="/timers/new">
          <a>New timer</a>
        </Link>
      </Container>
    </>
  )
}
