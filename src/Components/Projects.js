import React from "react";
import ShowProject from "./ShowProject";
import { projectData } from "./data";

function Projects() {
    var rows = [];
    for (var i = 0; i < projectData.length; i++) {
        rows.push(
            <ShowProject key={i} projectData={projectData[i]}/>
           );
    }

    return (
        <div className=" bg-bground pb-10 text-dark">
            <h1 className="text-5xl p-5 font-bold text-center"> My Projects</h1>
            <div className="flex-wrap flex justify-center pb-20 ">
                {/* <h2 className="text-center">Projects page in progress, please come back later</h2> */}
                {rows}
            </div>
        </div>
    )
}

export default Projects;