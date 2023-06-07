"use client"
import React from 'react'
import { ImLinkedin } from "react-icons/im"
import { FiGithub } from "react-icons/fi"
import { SiGmail } from "react-icons/si"
import Link from 'next/link'



function Footer() {
    return (
        <footer className='mx-auto max-w-3xl px-4 sm:px6 md:max-w-5xl'>
            <hr className='w-full h-1 mx-auto mt-8 bg-neutral-400 border-0'></hr>
            <div className='space-y-3 mx-auto p-4 flex flex-col text-center text-neutral-800'>
                <div className='text-neutral-400 dark:text-neutral-100 font-bold'>
                    2023 Pierre-Alexis Foy
                </div>
                <div className='flex flex-row space-x-3 items-center justify-center mb-2'>
                    <a href="https://www.linkedin.com/in/pierre-alexis-foy/" target="_blank" >
                        <ImLinkedin 
                            size={30}
                            className="hover:animate-bounce"
                        />
                    </a>
                    <a href="https://github.com/PierrealFOY/" target="_blank" >
                        <FiGithub 
                            size={30}
                            className="hover:animate-bounce"
                        />
                    </a>
                    <p>
                        <Link href="pierre.alexis.56@gmail.com" target="_blank">                            
                            <SiGmail 
                                size={30}
                                className="hover:animate-bounce"
                            />
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer