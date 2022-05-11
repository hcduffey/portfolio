import Job from "./Job";

const JobList = () => {
    return(
        <div className="job-list-container">
         <Job img="general_assembly.png" name="General Assembly" job="Student Fellow" description="Software Engineering Immersion: a 13 week, 500+ hour software engineering immersion program gaining
                experience in front-end and back-end programming and best practices. Developed web applications from ideation (wireframes, ERD, user stories) to execution
                (deploying SPAs and RESTful APIs) utilizing Javascript/React, Python, Node/Express and
                Git/Github for version control." />
        </div>
    );
}

export default JobList