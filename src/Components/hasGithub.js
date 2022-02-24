import React from "react";

function DisplayGit({hasGithub, githubSrc}) {
    let hasgit;
    if(hasGithub === "true")
        hasgit = true;


    if (hasgit) {
      return (
      <div>
          <a href= {githubSrc}
          className="text-secondary text-center underline">
              Link to the GitHub
          </a>
      </div>
      )
    }
    return <div/>;
}

export default DisplayGit;