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
                <img className="project-image" src={props.img} alt={props.name} />
            </div>
            <div ref={projectDescription} className="project-description-container hide">
                <h1 className="title">{props.name}</h1>
                <div className="project-link-container">    
                    <a className="button is-link is-outlined project-button" rel="noreferrer" target="_blank" href={props.repo}>Code</a> 
                    <a className="button is-primary is-outlined project-button" rel="noreferrer" target="_blank" href={props.url}>Demo</a>
                </div>
                <p>{props.description}</p>
            </div>
                
        </div>
    );
}

export default Project;