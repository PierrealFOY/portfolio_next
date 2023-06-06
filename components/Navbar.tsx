/* eslint-disable react/jsx-no-comment-textnodes */
"use client"
import React from "react";
import { useState } from "react"
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
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
        page: "projects",
    }
]

function Navbar (): React.JSX.Element {
    
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme: theme;
    const [burgerMenu, setBurgerMenu] = useState(false);

    return (
        <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
            <div className="justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3">
                        <div className="md:py-5 md:block">
                            <h2 className="pr-4 text-2xl font-bold">Pierre-Alexis Foy</h2>
                        </div>
                            <div className="md-hidden">
                                <button 
                                    onClick={() => setBurgerMenu(!burgerMenu)}
                                >
                                    {burgerMenu ? <IoMdClose size={30} /> : <IoMdMenu size={30}/>}
                                </button>
                            </div>
                    </div>
                </div>
                <div className=" items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    {NAV_ITEMS.map((item, idx) => {
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
        </header>
    )
}

export default Navbar;