"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Footer from "@/components/footer"

import MyForm1 from "@/components/MLtest";
import MyForm2 from "@/components/MLtest2";


export default function Home() {
  return (
   <div className="min-h-screen">
      <div className="mx-auto max-w-screen-xl">
         <div className="flex flex-col p-32 gap-24">
            <div className="text-6xl font-serif">
               New Project
            </div>
            <div className="flex flex-col gap-32 mx-auto">
               <div className="flex flex-row gap-32">
                  <MyForm1/>
                  <div className="mx-auto max-w-screen-xl">
                     <div className="flex flex-col gap-8">
                        <div>
                           Model 1
                        </div>
                        <div>
                           Lorem ipsum
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex flex-row gap-32 mx-auto">
                  <div className="mx-auto max-w-screen-xl">
                     <div className="flex flex-col gap-32">
                        <div>
                           Model 1
                        </div>
                        <div>
                           Lorem ipsum
                        </div>
                     </div>
                  </div>
                  <MyForm2/>
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
