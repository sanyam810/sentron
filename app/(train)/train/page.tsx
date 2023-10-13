"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Footer from "@/components/footer"

import MyForm from "@/components/MLinput1";

export default function Home() {
  return (
   <div className="min-h-screen">
      <div className="mx-auto max-w-screen-xl">
         <div className="flex flex-col p-32 gap-24">
            <div className="text-6xl font-serif">
               New Project
            </div>
            <div className="flex flex-row gap-8 mx-auto">
               <div>
                  <MyForm/>
               </div>
               <div>
                  {/* <MyForm/> */}
               </div>
               <div>
                  {/* <MyForm/> */}
               </div>
            </div>
         </div>
      </div>
   </div>
  )
}
