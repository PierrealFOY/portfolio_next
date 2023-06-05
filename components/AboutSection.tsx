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
                <div className='flex flex-col space-y-10 items-stretch justify-center'>
                    <div className='md:w-1/2'>
                        <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
                            Quelques informations sur moi
                        </h1>
                        <p>
                        </p>
                    </div>
                    <div className='md:w-1/2'>
                        <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
                            Mes compétences
                        </h1>   
                            <div>
                                {
                                    skills.map((item, id) => {
                                        return (
                                            <p key={id}>{item.skill}</p> 
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