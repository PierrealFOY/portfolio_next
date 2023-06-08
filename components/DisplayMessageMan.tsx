/* eslint-disable react/jsx-no-comment-textnodes */
"use client"
import React from 'react'
import { useState } from 'react'
import Image from "next/image"
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { HiArrowDown } from "react-icons/hi"



function DisplayMessageMan() {
    const [hover, setHover ] = useState(false);

    // hook to display a message in the bubble if image hovered or not
    const handleMouseOver = () => {
        setHover(true);
    };

    const handleMouseOut = () => {
        setHover(false);
    };

    // array of objects to map
    const contacts = [
        {
            network:"Linkedin",
            adress:"https://www.linkedin.com/in/pierre-alexis-foy/"
        },
        {
            network:"GitHub",
            adress:"https://github.com/PierrealFOY/"
        },
        {
            network:"Mail",
            adress:"pierre.alexis.56@gmail.com"
        }
    ]

    return (
        <section id="contacts">
            <div 
                className=" md:mt-9 flex flex-col md:flex-row md:py-52"
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOut}
            >
            <div className="md:hidden flex flex-wrap flex-col overflow-hidden rounded-lg border-4 p-3">
                {contacts.map((item, id) => (
                    <Link
                        key={id}
                        href={item.adress}
                        target="_blank"
                        className="justify-center bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                    >
                        {item.network + ' : ' + item.adress}
                    </Link>
                ))}
            </div>
            {/*
                The bloc below is hidden on small screen. The image is only visible on md and upper screen.
            */}
                <div className="hidden md:flex md:flex-row md:mr-1 md:mt-2">
                    <h2 className="pr-8 text-xl font-bold flex items-center justify-center">
                        Pour me contacter, survole moi avec ta souris
                    </h2>
                    <Image src="/manSayHiAbout.svg" alt="" width={300} height={300} />
                </div>

                {hover && (
                    <div className="hidden md:flex md:flex-wrap md:flex-col md:overflow-hidden md:rounded-lg md:border-4 md:p-3">
                        <h2 className="md:text-left-0 text-2xl font-bold flex items-center justify-center">
                            Pour me contacter :
                        </h2>
                        {contacts.map((item, id) => {
                            return (
                                <Link
                                key={id}
                                href={item.adress}
                                target="_blank"
                                className="justify-center bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                >
                                {item.network + ' : ' + item.adress}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    )
}

export default DisplayMessageMan
