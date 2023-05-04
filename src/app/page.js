
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
        <title> Netflix</title>
        <meta name="description" content="Watch any Series in Todays" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

   
      <main >
        <Link href={`/movies`}>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/42f6dd08-d478-46e4-a4a8-e3a93aa7e085/IN-en-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
        </Link>
      </main>
    
    </>
  )
}
