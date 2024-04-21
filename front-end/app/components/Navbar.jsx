import React from 'react'
import Link from 'next/link';
import logo from './logo.jpg'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
          <Image
          src = {""}
          width = {70}
          quality = {100}
          />

          <h1> motionbot</h1>
          
          <Link href = "/"> Dashboard</Link>
          <Link href = "/motion"> Motions</Link>
    </nav>
  )
}
