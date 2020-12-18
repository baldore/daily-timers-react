import Head from 'next/head'
import Timer from '../components/Timer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daily timers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Choose your timer</h1>
        <Timer />
      </main>
    </div>
  )
}
