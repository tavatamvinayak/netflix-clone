import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Head>
        <title> Netflix</title>
        <meta name="description" content="Watch any Series in Todays" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <main>
        <h1>home</h1>
            
      </main>
      <Footer/>
    </>
  )
}
