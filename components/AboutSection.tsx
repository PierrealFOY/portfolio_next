/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import Image from "next/image"
import Link from 'next/link'
// import { Link } from "react-scroll/modules"
import { Button } from '@mui/material';


const skills = [
    { skill: "HTML"},
    { skill: "CSS"},
    { skill: "JavaScript : ReactJs, NextJs"},
    { skill: "PHP: Laravel, Symfony"},
    { skill: "SQL"},
    { skill: "GitHub"},
    { skill: "VSCode"},
    { skill: "Agile"},
]

function AboutSection() {
    return (
        <section id="about"> 
            <div className='my-12 pb-12 md:pt-16 md:pb-48'>
                <h1 className='text-center font-bold text-4xl'> 
                    A propos de moi
                    <hr className="w-11 h-2 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>
                <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
                    <div className='md:w-1/2'>
                        <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
                            Quelques informations sur moi
                        </h1>
                        <p>
                            Description à ajouter ICI
                            Pour accéder à mon CV c'est juste ici
                            <Link 
                                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 border border-teal-700 rounded ml-2 mt-2"
                                href="/CV_PA.pdf"
                                target="_blank"
                                >
                                Mon CV
                            </Link>
                        </p>
                    </div>
                    <div className='text-center md:w-1/2 md:text-left'>
                        <h1 className='text-2xl font-bold mb-6'>
                            Mes compétences
                        </h1>   
                            <div className='flex flex-wrap flex-row justify-center z-10 md:justify-start '>
                                {
                                    skills.map((item, id) => {
                                        return (
                                            <p 
                                            key={id}
                                            className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                            >
                                                {item.skill}</p> 
                                        )
                                    })
                                }
                            </div>
                        <p>
                        </p>
                        <div className='hover:scale-150'>
                            <Image 
                                src="/manSayHiAbout.svg"
                                alt=""
                                width={310}
                                height={310}
                                className="hidden transition-transform duration-300 transform md:block md:relative md:bottom-4 md:left-32 md:z-0 mt-5"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection