/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import Image from "next/image"
// import Link from 'next/link'
import { Link } from "react-scroll/modules";
import { Button } from '@mui/material';
import { HiArrowDown } from "react-icons/hi"



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
                            Quelques infos
                        </h1>
                        <p className='flex flex-wrap md:mt-5 md:ml-2 text-2xl'>
                            Après avoir effectué la formation Développeur Web et Web Mobile au sein de l'Ecole O'Clock et avoir obtenu le Titre Professionnel du même nom (DWWM), j'ai décidé de continuer à me former dans le domaine du développement. A partir de Septembre 2023, je continue l'aventure avec l'école O'Clock, cette fois-ci en tant qu'alternant dans le cadre de la formation Concepteur Développeur d'Applications.
                            Je suis donc à la recherche d'une entreprise en contrat d'apprentissage, en partenariat avec le CFA Afia, qui s'occupe du suivi de mon alternance et de la partie administrative de celle-ci.
                            La formation m'a permis de réaliser de nombreuses applications et fonctionnalités web, autant coté Front que côté Back. 
                            Pour accéder à mon CV c'est juste en dessous :
                            <span className='mt-3'>
                                <Link 
                                    className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 border border-teal-700 rounded ml-2 mt-2"
                                    href="/CV_PA.pdf"
                                    target="_blank"
                                >
                                    Mon CV
                                </Link>
                            </span>
                        </p>
                        <div>
                            <Image
                                src="/CvDrawing.svg"
                                alt=""
                                width={120}
                                height={120}
                                className=" transition-transform duration-300 transform md:block  md:top-20 md:right-8 mt-5"
                            />                            
                        </div>
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
                    </div>
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

export default AboutSection