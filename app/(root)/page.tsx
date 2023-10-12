"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

export default function Home() {
  return (
   <div className="min-h-screen">
      <div className="">
        <div className="flex flex-col">
          <Navbar/>
        </div>
        <div className="mx-auto max-w-screen-xl">
          <Hero/>
        </div>
      </div>
   </div>
  )
}
