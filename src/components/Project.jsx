import { useRef } from "react";

const Project = (props) => {
    const projectImage = useRef();
    const projectDescription = useRef();

    const handleMouseEnter = () => {
        projectImage.current.classList.add("hide");
        projectDescription.current.classList.remove("hide");
    }

    const handleMouseLeave = () => {
        projectImage.current.classList.remove("hide");
        projectDescription.current.classList.add("hide");
    }

    return(
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="project-container">

            <div ref={projectImage} className="project-image-container">
                <a href={props.url}><img className="project-image" src={props.img} alt={props.name} /></a>
            </div>
            <div ref={projectDescription} className="project-description-container hide">
                <h1 className="title">{props.name}</h1>
                <div className="project-link-container">
                    <a href={props.repo}><img className="repo-img" src="repo.png" alt="repo" /></a>
                    <a href={props.url}><img className="repo-img" src="live.png" alt="live" /></a>
                </div>
                <p>{props.description}</p>
            </div>
                
        </div>
    );
}

export default Project;