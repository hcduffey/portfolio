import Project from "./Project";

const ProjectList = () => {
    const projects = [
        {name: "Tic Tac Toe", img: "tic-tac-toe.png", url: "https://hcduffey.github.io/tic-tac-toe-project/"},
        {name: "Memory", img: "memory.png", url: "https://hcduffey.github.io/memory-match-game/"},
        {name: "Candyland", img: "candyland.png", url: "https://hcduffey.github.io/candyland/"},
        {name: "MTG: Collect", img: "mtgcollect.png", url: "https://github.com/hcduffey/MTG-Collector"},
        {name: "Sixty-Three", img: "sixty-three.png", url: "https://github.com/hcduffey/SixtyThree"},
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