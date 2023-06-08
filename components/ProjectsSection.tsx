/* eslint-disable react/jsx-no-comment-textnodes */
"use client"
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { Link as Scroll }   from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi"
import { FiGithub } from "react-icons/fi"
import { FiExternalLink } from "react-icons/fi"
import { ImHourGlass } from "react-icons/im"

/* eslint-disable react/no-unescaped-entities */

const projects = [ 
    {
        name: "What's The Movie ?",
        description: " Projet de fin d'études durant ma formation de Développeur Web et Web Mobile. Site où l'utilisateur peut jouer à un quiz sur le thème du cinéma. Le but étant, pour l'utilisateur de trouver le bon film parmi 4 propositions avant la fin du timer. Pour l'aider, des indices apparaissent à interval régulier. Le Back Office  a été créé avec Symfony et BootStrap. Des rôles administrateurs sont créés pour gérer le site. Un utilisateur connecté peut ajouter des films en Base De Données, qui devront au préalable être validés par les administrateurs. Nous étions 6 développeurs pour coder ce site from scratch en méthode Agile pendant 4 semaines. ",
        image: "/wtmImage.png",
        link: "https://whats-the-movie.timothe-bequet.fr/",
        // gitRepo: ""
    },
    {
        name: "Age Calculator",
        description: "Petite application web permettant de calculer son age en années, en mois et en jours. ",
        image: "/ageCalculator.jpg",
        link: "https://pierrealfoy.github.io/Age_Calculator_Js/",
        gitRepo: "https://github.com/PierrealFOY/Age_Calculator_Js/"
    },
]

function ProjectsSection() {
    return (
        <section id="projectsSection" className='my-12 pb-18 md:pt-16 md:pb-30'> 
            <div>
                <h1 className='my-12 text-center font-bold text-4xl'>
                    Projets
                    <hr className='w-20 h-2 mx-auto my-4 bg-orange-500 border-0 rounded'></hr>
                </h1>
            </div>
            <div className='flex flex-col space-y-20'>
                {
                    projects.map((project, id) => {
                        return (
                            <div key={id}>
                                <div className='flex flex-col md:flex md:flex-row md:space-x-10'>
                                    <div className='mt-6 md:w-1/2'>
                                        <Link href={project.link} target="_blank">
                                            <Image 
                                                src={project.image}
                                                alt=""
                                                width={400}
                                                height={400}
                                                className={"rounded-xl shadow-xl hover:opactity-60"}
                                            />
                                        </Link>
                                    </div>
                                    <div className='mt-10 md:w-1/2'>
                                        <h1 className='text-4xl font-bold mb6'>
                                            {project.name}
                                        </h1>
                                        <p className='pt-2 text-xl leading-7 text-neutral-600 dark:text-neutral-400 '>
                                            {project.description}
                                        </p>
                                        <div className='flex flex-row pt-4 space-x-5'>
                                            <Link 
                                                href={project.gitRepo ? project.gitRepo : ''}
                                                target="_blank"
                                            >
                                                <FiGithub 
                                                    size={40}
                                                    className="hover:animate-bounce"
                                                />
                                            </Link>
                                            <Link 
                                                href={project.link}
                                                target="_blank"
                                            >
                                                <FiExternalLink 
                                                    size={40}
                                                    className="hover:animate-bounce"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex flex-row py-10 text-xl md:space-x-10 font-bold'>
                <h2>
                    La grande majorité des applications et composants web que j'ai codé ont été réalisés dans le cadre de ma formation chez O'Clock. Pour des raisons légales et de droit de propriété, je ne peux pas les présenter, ainsi que leurs repositories sur GitHub. Mais demandez moi plus d'infos sur les composants et applications codés !
                    Il y a encore plein d'autres applications et projets en cours... 
                </h2>
                <p>
                    <ImHourGlass 
                        size={40}
                        className="animate-spin-slow duration-4000"
                    />
                </p>
            </div>
            <div className='flex flex-row items-center text-center justify-center md:pt-12'>
                <Scroll
                    to="contacts"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}       
                >
                    <HiArrowDown className='animate-bounce' size={34}/>
                </Scroll>                
            </div>
        </section>
    )
}

export default ProjectsSection
