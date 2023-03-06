import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NFTDropPage from './nft/[id]'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>NFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NFTDropPage />
      </main>
      
      
    </div>
  )
}

export default Home
