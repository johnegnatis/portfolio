import React from "react";

import github from '../images/github.png'
import linkedin from '../images/linkedin.png'

function Footer(){
    const lengthOfIcon = 50;
    return (
        // TODO make links on photos work
        <footer className="p-5 flex justify-center bg-white absolute bottom-0 w-full h-20"> 
            <a href="https://www.linkedin.com/in/john-egnatis/"
                className="px-5"
            >
                <img
                    src={linkedin}
                    alt="link to linkedin"
                    height={lengthOfIcon}
                    width={lengthOfIcon}
                >
                </img>
            </a>
            <a href="https://github.com/johnegnatis"
                className="px-5"
            >
                <img
                    src={github} 
                    alt="link to github"  
                    height={lengthOfIcon}
                    width={lengthOfIcon}
                />
            </a>
        </footer>
    )
}

export default Footer;