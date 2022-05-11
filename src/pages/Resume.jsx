import JobList from "../components/JobList";

const Resume = () => {
    return(
        <div className="page-container">
            <h1>Experience <a href="/resume.pdf"><img src="file_icon.svg" alt="file" /></a></h1>            
            <JobList />
        </div>
    )
}

export default Resume;