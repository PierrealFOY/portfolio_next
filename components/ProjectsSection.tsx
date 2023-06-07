/* eslint-disable react/jsx-no-comment-textnodes */
"use client"
import React from 'react'
import Image from "next/image"
import { Link } from "react-scroll/modules"
/* eslint-disable react/no-unescaped-entities */

const projects = [
    {
        name: "What's The Movie ?",
        description: " Projet de fin d'études durant ma formation de Développeur Web et Web Mobile. Site où l'utilisateur peut jouer à un quiz sur le milieu du cinéma. Parmi 4 propositions, l'utilisateur doit trouver le bon film, un timer défile et des indices apparaissent pour l'aider. Back Office créé avec Symfony et BootStrap. Des rôles administrateurs sont créés pour gérer le site. Un utilisateur peut connecté peut ajout des films en Base De Données qui devront au préalable être validés par les administrateurs. Nous étions 6 développeurs pour coder ce site from scratch en méthode Agile pendant 4 semaines. ",
        image: "",
        link: "https://whats-the-movie.timothe-bequet.fr/",
    }
]

function ProjectsSection() {
    return (
        <section id="projects"> 
            <h1 className='text-center font bold text-4xl'>
                Projets
                <hr className='w-6 h-1 mx-auto my-4 bg text-teal-500 border-0 rounded'></hr>
            </h1>

            <div>

            </div>
        </section>
    )
}

export default ProjectsSection