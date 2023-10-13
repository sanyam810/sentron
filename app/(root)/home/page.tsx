"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Footer from "@/components/footer"

export default function Home() {
  return (
   <div className="min-h-screen">
      <div className="">
        <div className="flex flex-col">
          <Navbar/>
        </div>
        <div className="mx-auto max-w-screen-xl">
            <div>
              <Hero/>
            </div>
            <div className="mt-48">
              <About/>
            </div>
        </div>
        <div className="p-16 mt-16 ">
              {/* <Footer/> */}
        </div>
      </div>
   </div>
  )
}
