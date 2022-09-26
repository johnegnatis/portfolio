import React from "react";
import DisplayGit from './hasGithub';
import DisplayPDF from './DisplayPDF';
import { ShowYoutube } from "./ShowYoutube";

const ShowProject = ({projectData}) => { 

    return (
        <div className= 'shadow-xl shadow-black border-primary border-2 w-projectShow m-5 block bg-white text-dark rounded-md relative'>
            <h1 className='text-3xl text-center font-bold pt-4 px-4'>{projectData.title}</h1>
            <h2 className='text-2xl text-center italic px-4'>{projectData.subtitle}</h2>
            <h3 className='text-center text-sm italic pb-2'>{projectData.date}</h3>
            <p className='px-4 pb-56'>{projectData.paragraph}</p>
            <div className='absolute bottom-0 w-full'>
                <div className='flex justify-center pb-4'>
                        {(projectData.github) ? <DisplayGit github= {projectData.github}/> : null }
                        {(projectData.pdf) ? <DisplayPDF pdf={projectData.pdf} /> : null}
                </div>
                <div className='flex justify-center pb-4'>
                        {(projectData.youtube) ? <ShowYoutube youtube = {projectData.youtube}/> : null }
                </div>
            </div>
        </div>
    )
}

export default ShowProject;