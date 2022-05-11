import Intro from "../components/Intro";
import ProjectList from "../components/ProjectList";

const About = () => {
    return(
        <div className="page-container">
            <Intro />
            <h1>Projects</h1>
            <ProjectList />
        </div>
    )
}

export default About;