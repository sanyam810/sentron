"use client";

import Link from 'next/link';

import { TronCanvas } from "./canvas";



const Hero = () => {
    return (
        <section className="relative mx-auto">
            <div className="flex flex-row justify-center">
                <div>
                    <div className="flex flex-col gap-8">
                        <div className="text-6xl font-serif">
                            Sentron Machine
                        </div>
                        <div className="text-4xl font-serif">
                            Train a computer to recognize your <br></br> own images, sounds, & poses.
                        </div>
                        <div className="text-2xl font-serif">
                        A fast, easy way to create machine learning models for <br></br> your sites, apps, and more – no expertise or coding required.
                        </div>
                        <div>
                            <Link href="/train">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl w-48">
                                    <div className="font-bold text-1xl">
                                        Get Started
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-2/3 xl:w-1/2 p-4 m-4">
                    <TronCanvas/>
                </div>
            </div>
        </section>
    );
}
 
export default Hero;