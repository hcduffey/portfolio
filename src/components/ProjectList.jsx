import Project from "./Project";

const ProjectList = () => {
    const projects = [
        {name: "Tic Tac Toe", img: "logo512.png", url: "#"},
        {name: "Memory", img: "logo512.png", url: "#"},
        {name: "Candyland", img: "logo512.png", url: "#"},
        {name: "MTG: Collect", img: "logo512.png", url: "#"},
        {name: "Sixty-Three", img: "logo512.png", url: "#"},
    ];

    return(
    <div className="project-list-container">
        { 
          projects.map((project, idx) => {
            return(
            <div key={idx} className="project-container">
                <Project name={project.name} img={project.img} url={project.url} />
            </div>
            )
          })
        }
    </div>
    );
}

export default ProjectList;