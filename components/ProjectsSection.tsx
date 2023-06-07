/* eslint-disable react/jsx-no-comment-textnodes */
"use client"
import React from 'react'
import Image from "next/image"
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi"

/* eslint-disable react/no-unescaped-entities */

const projects = [
    {
        name: "What's The Movie ?",
        description: " Projet de fin d'études durant ma formation de Développeur Web et Web Mobile. Site où l'utilisateur peut jouer à un quiz sur le milieu du cinéma. Parmi 4 propositions, l'utilisateur doit trouver le bon film, un timer défile et des indices apparaissent pour l'aider. Back Office créé avec Symfony et BootStrap. Des rôles administrateurs sont créés pour gérer le site. Un utilisateur peut connecté peut ajout des films en Base De Données qui devront au préalable être validés par les administrateurs. Nous étions 6 développeurs pour coder ce site from scratch en méthode Agile pendant 4 semaines. ",
        image: "/wtmImage.png",
        // link: "https://whats-the-movie.timothe-bequet.fr/",
    }
]

function ProjectsSection() {
    return (
        <section id="projectsSection"> 
            <div>
                <h1 className='text-center font bold text-4xl'>
                    Projets
                    <hr className='w-6 h-1 mx-auto my-4 bg text-teal-500 border-0 rounded'></hr>
                </h1>
            </div>
            <div className='flex flex-col space-y-20'>
                {
                    projects.map((project, id) => {
                        return (
                            <div key={id}>
                                <div className='flex flex-col md:flex md:flex-row md:space-x-10'>
                                    <div className='md:w-1/2'>
                                        <Image 
                                            src={project.image}
                                            alt=""
                                            width={300}
                                            height={300}
                                            className={"rounded"}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='mb-5 flex flex-row items-center text-center justify-center'>
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