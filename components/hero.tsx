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
                            Sentron
                        </div>
                        <div className="text-4xl font-serif">
                        Bridging gaps, enhancing travel.<br></br> Inclusive information for all.
                        </div>
                        <div className="text-xl font-serif">
                        In today's fast-paced world, communication at public transportation hubs needs to be more efficient and inclusive.<br></br> However, a significant problem exists: there's often a lack of accessible information, especially in railway and bus stations. This happens because the current communication methods don't meet the diverse language and accessibility needs of passengers. As a result, many travelers struggle to get essential information, making their journey less enjoyable. We need innovative solutions to fix this and give passengers timely and easy-to-access information
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