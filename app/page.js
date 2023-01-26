
'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from 'react'
import { parseCookies } from 'nookies'

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const cookies = parseCookies()
    const hasTicket = !!cookies['ticketName'];

    const timer = setTimeout(() => {
      if (hasTicket) {
        router.push('/main/ticket');
      }
      else {
        router.push('/welcome');
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    }
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
