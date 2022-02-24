import React from "react";
import photo from "../images/fullphoto.png"
import photo1 from "../images/halfphoto.png"


function AboutMe() {
    return (
        <div className="flex justify-center text-dark bg-bground xl:px-24 h-full">
            
            <div className="shadow-xl shadow-black border-primary border-2 rounded-2xl bg-white mt-10 mb-32 pt-5 h-2/3 w-4/5">
                {/* white container */}
                {/* header */}
                <h1 className="pb-5 font-bold text-center text-5xl">About Me</h1>
                <div className="lg:flex lg:justify-between">
                    <div className="lg:w-2/3 justify-center flex text-center p-5 lg:p-2">
                        <div className="text-left text-md md:text-lg lg:px-4 xl:px-10 xl:text-xl 2xl:text-2xl">
                            <p className="py-4">I am a student at UTD and an aspiring software engineer, passionate about learning everything to do with the React.js stack. I am driven by the idea of making something out of nothing with just lines of code. I am currently reviewing internships for the Summer of 2022 as I am excited to be able to apply my skills in a work environment.</p>
                            <p className="py-4">
                            My favorite passtime is playing lacrosse for my school. However, in my free time you can often find me either hanging out with friends, going on outdoor adventures, participating in a hackathon, ice skating, watching hockey, or spending quality time with my amazing family. </p>
                        </div>
                    </div>
                    <div className="hidden lg:flex justify-end h-about w-auto">
                        {/* image */}
                        <img 
                            src={photo}
                            alt=""
                            className=""
                            />
                    </div>
                    <div className="lg:hidden justify-center flex w-full h-full">
                        {/* image */}
                        <img 
                            src={photo1}
                            alt=""
                            className="w-3/5"
                            />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutMe;