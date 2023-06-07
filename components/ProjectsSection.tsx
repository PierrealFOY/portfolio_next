/* eslint-disable react/jsx-no-comment-textnodes */
"use client"
import React from 'react'
import Image from "next/image"
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi"
import { FiGithub } from "react-icons/fi"
import { FiExternalLink } from "react-icons/fi"
import { RxLapTimer } from "react-icons/rx"

/* eslint-disable react/no-unescaped-entities */

const projects = [ 
    {
        name: "What's The Movie ?",
        description: " Projet de fin d'études durant ma formation de Développeur Web et Web Mobile. Site où l'utilisateur peut jouer à un quiz sur le milieu du cinéma. Parmi 4 propositions, l'utilisateur doit trouver le bon film, un timer défile et des indices apparaissent pour l'aider. Back Office créé avec Symfony et BootStrap. Des rôles administrateurs sont créés pour gérer le site. Un utilisateur peut connecté peut ajout des films en Base De Données qui devront au préalable être validés par les administrateurs. Nous étions 6 développeurs pour coder ce site from scratch en méthode Agile pendant 4 semaines. ",
        image: "/wtmImage.png",
        link: "https://whats-the-movie.timothe-bequet.fr/",
        // gitRepo: ""
    },
    {
        name: "Age Calculator",
        description: " Petite application permettant de calculer son age en années, en mois et en jours. ",
        image: "/",
        link: "https://pierrealfoy.github.io/Age_Calculator_Js/",
        gitRepo: "https://github.com/PierrealFOY/Age_Calculator_Js"
    },
    {
        name: "",
        description: "",
        image: "/",
        link: "",
        gitRepo: ""
    }
]

function ProjectsSection() {
    return (
        <section id="projectsSection"> 
            <div>
                <h1 className='my-12 text-center font-bold text-4xl'>
                    Projets
                    <hr className='w-20 h-2 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
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
                                        <p className='text-xl leading-7 text-neutral-600 dark:text-neutral-400 '>
                                            {project.description}
                                        </p>
                                        <div className='flex flex-row pt-4 space-x-5'>
                                            <Link 
                                                href={project.gitRepo}
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
            <div className='flex flex-row py-10 text-2xl md:space-x-10 font-bold'>
                <h2>
                    Il y a encore plein d'autres applications et projets en cours et à venir... 
                </h2>
                <p>
                    <RxLapTimer 
                        size={40}
                        className="animate-spin"
                    />
                </p>
            </div>
            <div className='flex flex-row items-center text-center justify-center'>
                <Link
                    to="contacts"
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

export default ProjectsSection