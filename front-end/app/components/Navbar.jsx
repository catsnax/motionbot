"use client"
import React from "react";
import Link from "next/link";
import logo from "./logo.jpg";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import {useState} from "react";

export default function Navbar() {
  const [hamburger, setHamburger] = useState(false);


  return (
    <nav className = "flex flex-col gap-2 items-center">
      <Image src={""} width={70} quality={100} />
      
      <Link href="/">
        <h1> motionbot.</h1>
      </Link>
      <button onClick = {() => setHamburger((prev) => !prev)}> <GiHamburgerMenu size={30} /> </button>
      
      {hamburger && <><Link href="/motion/add"> Add</Link>
      <Link href="/motion/generate"> Random</Link>
      <Link href="/training/game"> Training</Link>
      <Link href="/"> Resources</Link></>}
      
    </nav>
  );
}
