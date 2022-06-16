const Project = (props) => {
    return(
        <div className="project-container">
            <div className="project-left-container">
                <div className="project-image-container">
                    <a href={props.url}><img className="project-image" src={props.img} alt={props.name} /></a>
                </div>

                <div className="project-name-container">
                    <div className="project-left-container">
                        {props.name}
                        <div className="project-link-container">
                            <a href={props.repo}><img class="repo-img" src="repo.png" alt="repo" /></a>
                            <a href={props.url}><img class="repo-img" src="live.png" alt="live" /></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="project-right-container">
                    {props.description}
            </div>
        </div>
    );
}

export default Project;