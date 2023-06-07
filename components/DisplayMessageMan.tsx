/* eslint-disable react/jsx-no-comment-textnodes */
"use client"
import React from 'react'
import { useState } from 'react'
import Image from "next/image"
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'


function DisplayMessageMan() {
    const [hover, setHover ] = useState(false);

    // hook to display a message in the bubble if image hovered or not
    const handleMouseOver = () => {
        setHover(true);
    };

    const handleMouseOut = () => {
        setHover(false);
    };

    // array of objects to map
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
            className='mt-5 flex flex-col md:p-4 md:flex-row '
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
        >
            {/* <div className='hidden absolute z-index'>
                <div className=''>
                    <p className='pr-2 ease-in duration-300'>
                    </p>
                    <FaArrowRight className='text-3xl'/>
                </div>
            </div> */}
            <div className='hidden md:block md:ml-1 md:mt-2'>
                <Image
                    src="/manSayHiAbout.svg"
                    alt=""
                    width={300}
                    height={300}
                    className=" " 
                />
            </div>
            <div className='md:pl-3'>
                {hover ? (
                    <div className='hidden md:flex md:flex-wrap md:flex-col md:overflow-hidden md:rounded-lg md:border-4 md:p-3'>
                        <h2 className='md:text-left-0 text-2xl font-bold md:flex items-center justify-center '>
                            Pour me contacter :
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
                                );
                            })
                        }
                    </div>
            ) : (
                <div className='flex flex-wrap flex-col overflow-hidden rounded-lg border-4 p-3'>
                    <h2 className='text-left-0 text-2xl font-bold flex items-center justify-center '>
                        Pour me contacter :
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
                            );
                        })
                    }
                </div>
            )}
        </div>
        </div>
    );
}

export default DisplayMessageMan
