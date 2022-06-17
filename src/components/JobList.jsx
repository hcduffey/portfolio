import Job from "./Job";
import AttachFileIcon from '@mui/icons-material/AttachFile';

const JobList = () => {

    const jobArray = [
        {
            name: "General Assembly",
            img: "general_assembly.png",
            job: "Student Fellow",
            description: "a 13 week, 500+ hour software engineering immersion program gaining experience in front-end and back-end programming and best practices. Developed web applications from ideation (wireframes, ERD, user stories) to execution (deploying SPAs and RESTful APIs) utilizing Javascript/React, Python, Node/Express and Git/Github for version control."
        },
        {
            name: "Qbase, LLC",
            img: "qbase.jpg",
            job: "Project Lead",
            description: "Supported an Identity Management (IdM) System and Single Sign-On (SSO) solutions for a DoD customer. Provided technical expertise to manage the design, develop, configuration, test, and deployment of enhancements to the SailPoint IIQ, SiteMinder, and  CyberArk Privileged Access Management (PAM) system."
        },
        {
            name: "GDIT",
            img: "gdit.png",
            job: "Cybersecurity Lead",
            description: "Managed all cybersecurity tasks to support the secure development and deployment of an Enterprise DoD Identity, Credential, and Access Management (ICAM) service, leading architectural security analysis and supporting the overall design and implementation of the system."
        },
        {
            name: "Independent Contractor",
            img: "consultant.png",
            job: "Cybersecurity Consultant",
            description: "Performed security assessments over for mobile and web applications using automated static and dynamic analysis tools, pen-testing and scanning tools as well as manual code reviews."
        }
    ]

    return(
        <>
            <h1 className="title">Professional Highlights</h1>

            <h1 className="subtitle">Download my <a href="/duffey-resume.pdf" download={true}>Resume <AttachFileIcon /></a></h1>
            <div className="job-list-container">
            {
                jobArray.map((job, idx) => {
                    return(
                        <Job key={idx} class="job" img={job.img} name={job.name} job={job.job} description={job.description} />
                    )
                })
            }
            </div>
        </>
    );
}

export default JobList