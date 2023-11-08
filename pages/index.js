import Image from 'next/image'
import { Inter } from 'next/font/google'
import { readFileFromIPFS } from '@/components/pinata';
import { pinatajwt } from '@/components/config'; 
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [listings, getListing] = useState("");

  async function fetchListing() {
    const array = await readFileFromIPFS();
    getListing(array);
  }

  return (
    <div></div> 
  );
}
