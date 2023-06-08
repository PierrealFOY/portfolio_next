/* eslint-disable react/jsx-no-comment-textnodes */
"use client"
import React from "react";
import { useState } from "react"
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

// It is the equivalent of PropTypes but with Next, TypeScript is directly included
interface NavItems {
    label: string
    page: string
}

const NavItems = [
    {
        label: "Home",
        page: "home",
    },
    {
        label: "A propos",
        page: "about",
    },
    {
        label: "Projets",
        page: "projectsSection",
    }
]

const Navbar = () => {
    
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme: theme;
    const [burgerMenu, setBurgerMenu] = useState(false);

    return (
        <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow shadow-orange-500 bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
            <div className="justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3">
                        <div className="md:py-5 md:block">
                            <h2 className="pr-4 text-2xl font-bold">Pierre-Alexis Foy</h2>
                        </div>
                        {/*
                            Here, we hide the burgerMenu in desktop screen (md with tailwind)
                            This burgerMenu is avaliable in smaller screen (like phone)
                            When we click on the button, it displays or not the burgerMenu
                            We use a ternary expression : burgerMenu is true, we displays a close button 
                            BurgerMenu is false, it changes to a burgermenu to open with three horinzontal lines
                         */}
                            <div className="md:hidden">
                                <button 
                                    className="p-2"
                                    onClick={() => setBurgerMenu(!burgerMenu)}
                                >
                                    {burgerMenu ? <IoMdClose size={30} /> : <IoMdMenu size={30}/>}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                    
                    <div

                        className={'flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ' + (burgerMenu ? 'block' : 'hidden')}
                    >
                        {/*
                            We map our navItems array of objects coded above here 
                         */}
                        <div className=" items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {NavItems.map((item, idx) => {
                                return (
                                    <Link 
                                        key={idx}
                                        to={item.page}
                                        className={
                                            "block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-500"
                                        }
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        onClick={() => setBurgerMenu(!burgerMenu)}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            })}
                            {/*
                                Here, we switch (toggle) the theme onClick on the button
                                We use a ternary expression : dark is true, we click on the button so
                                we switch in light theme. If not, dark is false so we are in light theme 
                                so when we click we pass in dark theme
                         */}
                            {currentTheme === "dark" ? (
                                <button 
                                    onClick={() => setTheme("light")}
                                    className=" bg-slate-100 p-2 rounded-xl"
                                >
                                    <RiSunLine size={25} color="black"/>
                                </button>
                            ) : (
                                <button
                                    onClick={() => setTheme("dark")}
                                    className=" bg-slate-100 p-2 rounded-xl"
                                >
                                    <RiMoonFill size={25} />
                                </button>
                            )}
                            </div>
                        </div>
                </div>
            </div>
        </header>
    )
}


export default Navbar;