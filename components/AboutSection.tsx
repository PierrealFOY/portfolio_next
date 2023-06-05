/* eslint-disable react/no-unescaped-entities */
import React from 'react'

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

function PersonalSection() {
    return (
        <section id="about"> 
            <div className='my-12 pb-12 md:pt-16 md:pb-48'>
                <h1 className='text-center font-bold text-4xl'> A propos de moi</h1>
                <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
                    <div className='md:w-1/2'>
                        <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
                            Quelques informations sur moi
                        </h1>
                        <p>
                            Description à ajouter ICI
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
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default PersonalSection