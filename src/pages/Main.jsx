import { useState } from "react";
import Intro from "../components/Intro";
import ProjectList from "../components/ProjectList";
import JobList from "../components/JobList";

const Main = () => {
    const [showProjects, updateShowProjects] = useState(true);

    const handlePortfolioClick = (e) => {
        if(showProjects === false) {
            updateShowProjects(true)
        }   
    }

    const handleJobClick = (e) => {
        if(showProjects === true) {
            updateShowProjects(false)
        }   
    }

    return(
        <div className="page-container">
            <Intro />
            <div className="tabs is-large">
                <ul>
                    {/* eslint-disable-next-line */}
                    <li className={showProjects ? "is-active" : ""}><a onClick={handlePortfolioClick}>Portfolio</a></li>
                    {/* eslint-disable-next-line */}
                    <li className={!showProjects ? "is-active" : ""}><a onClick={handleJobClick}>Experience</a></li>
                </ul>
            </div>

            {showProjects ? <ProjectList /> : <JobList />}

        </div>
    )
}

export default Main;