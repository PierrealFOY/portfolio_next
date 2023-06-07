/* eslint-disable react/jsx-no-comment-textnodes */
"use client"
import React from 'react'
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
/* eslint-disable react/no-unescaped-entities */


function PersonalSection() {
    return (
        <section id="home" className='my-12 pb-12 md:pt-16 md:pb-26'> 
            <div className='md:w-5/6 flex flex-col text-center items-center justify-center my-10 py-16 md:flex-row md:space-x-4 md:text-left md:py-52'>
                <div className='md:w-1/2 md:mt-2'>
                    <Image 
                        className='rounded-full hover:shadow-lg hover:shadow-orange-500' 
                        src="/photoCV.jpg" 
                        alt="" 
                        width={300} 
                        height={300} 
                    />
                </div>
                <div className='md:mt-2 md:w-3/5 '>
                    <h1 className='font-bold text-4xl mt-6 md:text-7xl md:mt-0 '> Bonjour, bienvenue sur mon Portfolio !</h1>
                    <p className='text-lg mt-4 mb-6 md:text-2xl hover:shadow-lg hover:shadow-orange-500'>
                        Je m'appelle Pierre-Alexis Foy, j'ai 28 ans et j'habite à Rennes. Je suis développeur et actuellement
                        à la recherche d'une alternance dans le cadre de la formation Concepteur Développeur d'Applications 
                        à partir de Septembre 2023.
                    </p>
                </div>
            </div>
            <div className='flex flex-row items-center text-center justify-center'>
                <Link
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}       
                >
                    <HiArrowDown className='animate-bounce' size={34}/>
                </Link>                
            </div>
        </section>
    )
}

export default PersonalSection