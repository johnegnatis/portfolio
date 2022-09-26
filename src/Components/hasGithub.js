import React from "react";

function DisplayGit({github}) {
    return <div>
                <a href= {github}
                className="text-secondary text-center underline">
                    Link to the GitHub
                </a>
            </div>
}

export default DisplayGit;