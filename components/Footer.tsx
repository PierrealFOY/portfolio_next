import React from 'react'
import { ImLinkedin } from "react-icons/im"


function Footer() {
    return (
        <footer>
            <hr className='w-full h-1 mx-auto mt-8 bg-neutral-400 border-0'></hr>
            <div>
                <div>
                    2023 Pierre-Alexis Foy
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/pierre-alexis-foy/" target="_blank" >
                        <ImLinkedin 
                            size={30}
                            className="hover:animate-bounce"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/pierre-alexis-foy/" target="_blank" >
                        <ImLinkedin 
                            size={30}
                            className="hover:animate-bounce"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/pierre-alexis-foy/" target="_blank" >
                        <ImLinkedin 
                            size={30}
                            className="hover:animate-bounce"
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer