"use client"
import React from 'react'
import { useState } from 'react'
import Image from "next/image"


function DisplayMessageMan() {
    const [hover, setHover ] = useState(false);

    console.log('je suis là');

    const handleMouseOver = () => {
        setHover(true);
    };

    const handleMouseOut = () => {
        setHover(false);
    };

    return (
            <div className='relative flex flex-row h-90'>
                <Image
                    src="/manSayHiAbout.svg"
                    alt=""
                    width={310}
                    height={310}
                    className=" hidden transition-transform duration-300 transform md:block  md:top-20 md:right-8 mt-5" 
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
                <div className='absolute top-12 left-14 translate-x-1/2 '>
                    {hover && (
                        <div className='rounded-full border-4 p-3'>
                            <h2 className='flex items-center justify-center text-black'>
                                Si vous voulez me contacter : 0202020202
                            </h2>
                        </div>
                    )}
                </div>
            </div>
    )
}

export default DisplayMessageMan
