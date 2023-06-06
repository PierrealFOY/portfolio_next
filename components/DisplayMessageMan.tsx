"use client"
import React from 'react'
import { useState } from 'react'
import Image from "next/image"
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'


function DisplayMessageMan() {
    const [hover, setHover ] = useState(false);

    console.log('je suis là');

    const handleMouseOver = () => {
        setHover(true);
    };

    const handleMouseOut = () => {
        setHover(false);
    };

    const contacts = [
        {
            network:"Linkedin",
            adress:"https://www.linkedin.com/in/pierre-alexis-foy/"
        },
        {
            network:"GitHub",
            adress:"https://github.com/PierrealFOY/"
        },
        {
            network:"Mail",
            adress:"pierre.alexis.56@gmail.com"
        }
    ]

    return (
            <div 
                className=' mt-5 justify-center relative flex flex-row h-90'
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOut}
            >
                <div className='absolute z-index'>
                    <div className=''>
                        <p className='pr-2 ease-in duration-300'>
                            Passe la souris au-dessus
                        </p>
                        <FaArrowRight className='text-3xl'/>
                    </div>
                </div>
                <Image
                    src="/manSayHiAbout.svg"
                    alt=""
                    width={310}
                    height={310}
                    className=" hidden transition-transform duration-300 transform md:block  md:top-20 md:right-8 mt-5" 
                />
                <div className='mr-1 absolute top-5 right-12 translate-x-1/2 '>
                    {hover && (
                        <div className='flex flex-wrap overflow-hidden rounded-lg border-4 p-3'>
                                <h2 className='text-2xl font-bold flex items-center justify-center '>
                                    Si vous voulez me contacter :
                                </h2>
                                {
                                    contacts.map((item, id) => {
                                        return (
                                            <Link
                                            key={id}
                                            href={item.adress}
                                            target="_blank"
                                            className="justify-center bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                            >
                                                    {item.network + ' : ' + item.adress}  
                                            </Link>
                                        )
                                    })
                                }
                        </div>
                    )}
                </div>
            </div>
    )
}

export default DisplayMessageMan