import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/welcome');
    }, 2000);
  } , []);

  return <div className="bg-[#ffc800] w-full flex h-screen flex-col items-center gap-4 pt-52">
    <div>
      <h1 className="text-4xl antialiased	font-semibold">SDU</h1>
      <h1 className="text-4xl antialiased	font-semibold">on the</h1>
      <h1 className="text-8xl antialiased	font-semibold">Beach</h1>
    </div>
  </div>
}

export default Home
