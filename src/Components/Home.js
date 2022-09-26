import React from "react"; 
import myPhoto from "../images/myphoto.jpg"
import ShowProject from "./ShowProject";
import { projectData } from "./data";

function Home() {
    return (
            <div>
                <div className=" bg-white text-dark md:flex md:flex-row-reverse md:pt-20 xl:pb-10 lg:px-36 xl:px-56">
                    <div className="flex justify-center md:mx-5 md:mt-10 md:mb-5 md:basis-1/3">
                        <img
                            src={myPhoto}
                            className="rounded-full w-1/2 shadow-2xl shadow-black drop-shadow-2xl max-w-photoMaxW max-h-photoMaxH md:min-w-photoMinW md:min-h-photoMinH"
                            alt =""
                        />
                    </div>
                    <div className="md:max-w-1/2 md:basis-2/3">
                        <div className="flex justify-center md:justify-start">
                            <h1 className=" p-10 font-bold text-center text-5xl md:text-left">
                                Hello, I'm John,<br/>Software Engineer
                            </h1>
                        </div>
                        <div className="flex justify-center md:justify-start">
                            <p className="px-10 text-center md:text-left text-xl">
                                Welcome to my portfolio! I am a senior at UTD interested in Machine Learning and Software Development. I am currently seeking internships for the summer of 2023. I appreciate your interest and look forward to meeting you!
                            </p>
                        </div>
                        <div className="flex justify-center md:justify-start p-5">
                            <a href="/portfolio/resume.pdf" >
                                <button
                                    className="bg-primary text-white p-3 mb-20 font-bold rounded md:ml-5  md:justify-start"
                                >
                                    Download Resume
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <section className="bg-bground pb-20">
                    <h2 className="text-center font-bold text-4xl p-10 text-dark">Featured Projects</h2>
                    <div className="flex-wrap flex justify-center pb-20">
                        <ShowProject projectData={projectData[0]}/>
                        <ShowProject projectData={projectData[2]}/>
                        <ShowProject projectData={projectData[3]}/>
                    </div>
                </section>
            </div>

    )
}
export default Home;