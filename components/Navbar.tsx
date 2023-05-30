"use client"
import React from "react";
// import { Link } from "react-scroll/modules";
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
        label: "About",
        page: "about",
    },
    {
        label: "Projects",
        page: "projects",
    }
]

function Navbar (): React.JSX.Element {
    
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme: theme;
    // const [navbar, setNavbar] = useState(false);

    return (
        <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-0">
            <div className="justify-between md:items-center md:flex">
                <div>
                    <div className="md:py-5 md:block">
                        <h2 className="text-2xl font-bold">Pierre-Alexis Foy</h2>
                    </div>
                </div>
                <div className=" items-center justify-center md:flex md:space-x-6">
                    {NAV_ITEMS.map((item, idx) => {
                        return <a key={idx}>{item.label}</a>
                    })}
                    {currentTheme === "dark" ? (
                        <button>
                            <RiSunLine />
                        </button>
                    ) : (
                    <button>
                        <RiMoonFill />
                    </button>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Navbar;