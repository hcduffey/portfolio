import Project from "./Project";

const ProjectList = () => {
    const projects = [
        {
          name: "Candyland", 
          img: "candyland.png", 
          url: "https://hcduffey.github.io/candyland/", 
          repo:"https://github.com/hcduffey/candyland",
          description: "A browser-based implementation of the classic board game Candlyland. Built using HTML, JavaScript (JQuery) and CSS."
        },
        {
          name: "MTG: DeckBuilder", 
          img: "mtgcollect.png", 
          url: "https://celadon-donut-2d0bd2.netlify.app/", 
          repo:"https://github.com/hcduffey/mtg-react-client",
          description: "A SPA that provides users with the ability to create, import, export and manage Magic: The Gathering decks. Utilizes the MTG API to retrieve Magic cards. Built using MongoDB, Express, ReactJS, and Node.js."
        },
        {
          name: "Sixty-Three", 
          img: "sixty-three.png", 
          url: "https://sixty-three.herokuapp.com/", 
          repo:"https://github.com/hcduffey/SixtyThree",
          description: "U.S. National Park tracker application that allows users to track which of the 63 National Parks they've been to, earn milestone badges associated with the parks, and make posts and reviews based on their experiences. Built using MongoDB, Express, Node.js, and the National Parks Service API."
        },
        {
          name: "Express Secure", 
          img: "express.png", 
          url: "https://main--stalwart-cupcake-b2153c.netlify.app/", 
          repo:"https://github.com/hcduffey/express-secure-client",
          description: "A SPA written in ReactJS, with a Python Django REST API, and Postgresql that provides users with a static analysis scanning capability for their NodeJS Express applications."
        },
    ];

    return(
    <div className="project-list-container">
        { 
          projects.map((project, idx) => {
            return(
            <div key={idx} className="project-container">
                <Project name={project.name} img={project.img} url={project.url} repo={project.repo} description={project.description} />
            </div>
            )
          })
        }
    </div>
    );
}

export default ProjectList;