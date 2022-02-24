import React from "react";
import {Link } from 'react-router-dom'


function NavigationBar () {
    return (
        <div className="hidden sm:flex xl:pr-2 2xl:pr-10">
            <ul className="p-2 sm:flex text-lg">
                <li>
                    <Link
                        to="/portfolio/"
                        className="text-black px-5 font-bold hover:italic"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <a href="/portfolio/resume.pdf"
                        className="text-black px-5 font-bold hover:italic"
                    >
                        Resume
                    </a>
                </li>
                <li>
                    <Link
                        to="/portfolio/Projects"
                        className="text-black px-5 font-bold hover:italic"
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        to="/portfolio/AboutMe"
                        className="text-black px-5 font-bold hover:italic"
                    >
                        About Me
                    </Link>
                </li>
            </ul>           
        </div>
    )
}

function NavigationMenu(props) {
    return (
        <div>
            <ul className="font-bold text-2xl">
                <li className="border-b py-3 block text-3xl">
                    <h1 className="pl-10">
                        Menu
                    </h1>
                </li>
                <li>
                    <Link
                        to="/portfolio/"
                        className= "py-3 border-b block hover:italic"
                        onClick={props.closeMenu}
                    >
                        <h2 className="pl-10">Home</h2>
                    </Link>
                </li>
                <li>
                    <a href="/portfolio/resume.pdf"
                        className="py-3 border-b block hover:italic"
                        onClick={props.closeMenu}
                    >
                       <h2 className="pl-10">Resume</h2>
                    </a>
                </li>
                <li>
                    <Link
                        to="/portfolio/Projects"
                        className=" py-3 border-b block hover:italic"
                        onClick={props.closeMenu}
                    >
                        <h2 className="pl-10">Projects</h2>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/portfolio/AboutMe"
                        className=" py-3 block hover:italic"
                        onClick={props.closeMenu}
                    >
                        <h2 className="pl-10">About Me</h2>
                    </Link>
                </li>
            </ul>           
        </div>
    );
}

export {
    NavigationMenu,
     NavigationBar
};