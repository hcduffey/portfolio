const Project = (props) => {
    return(
        <div className="project-container">

            <div className="project-image-container">
                <img className="project-image" src={props.img} alt={props.name} />
            </div>

            <div className="project-name-container">
                <a href={props.url}>{props.name}</a>
            </div>

        </div>
    );
}

export default Project;