import Head from 'next/head'
import Image from 'next/image'
import tent from '../public/tent-white.png'
import logo from '../public/hypershelter-logo.png'

export default function Home() {
  return (
<div className='my-14 mx-8 sm:mx-32'>
<Head>
      <title>Hypershelter</title>
      <meta name="robots" content="index,follow" />
      <meta name="description" content="Rebuilding communities, one tent at a time." />
    </Head>
    <Image 
  src={logo}
  alt='user profile picture'
  className='select-none display-block ml-auto mr-auto'
  width="238"
  height="107"

/>
<Image 
  src={tent}
  alt='user profile picture'
  className='selection-none display-block ml-auto mr-auto mt-14 select-none'
  width="400"
  height="200"

/>
<h1 className='mt-8 font-semibold text-[50px] text-center'>Rebuilding communities, one tent at a time.</h1>
<p className='mt-4 text-[16px] text-center opacity-80'>A solar-powered tent that provides reliable and sustainable shelter for displaced Filipinos after typhoons. With its durable construction and renewable energy source, our tent offers a comfortable and eco-friendly solution for temporary housing needs.</p>
<p className='mt-4 text-16px] text-center opacity-40 italic'>coming soon.</p>
</div>
  )
}
