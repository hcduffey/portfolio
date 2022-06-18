import Job from "./Job";
import { DownloadForOffline } from "@mui/icons-material";
import { useRef, useState } from "react";

const JobList = () => {
    const generalAssembly = useRef();
    const qBase = useRef();
    const gdit = useRef();
    const consultant = useRef();
    const saic = useRef();

    const jobArray = [
        {
            name: "General Assembly",
            job: "Student Fellow",
            description: "Completed a 13 week, 500+ hour software engineering immersion program gaining experience in front-end and back-end programming and best practices. Developed web applications from ideation (wireframes, ERD, user stories) to execution (deploying SPAs and RESTful APIs) utilizing Javascript/React, Python, Node/Express and Git/Github for version control."
        },
        {
            name: "Qbase, LLC",
            job: "Project Lead",
            description: `Directed a team of six engineers and ensured customer satisfaction with the operation of the their Identity
            Management (IdM) and Single-Sign On (SSO) solution for an organization with over 7000 users. 
            Provided technical expertise to manage the design, development, test, and deployment of enhancements for the
            organizations Identity Management (IdM) tool suite: SailPoint IIQ, SiteMinder SSO, and CyberArk PAM.`
        },
        {
            name: "GDIT",
            job: "Cybersecurity Lead",
            description: `Performed security testing and assisted in vulnerability remediation for a ICAM solution that included SailPoint
            IdM, RadiantLogic LDAP and PingFederate SSO that supported SAML and OpenID Connect protocols. 
            Provided technical guidance to 15 engineers for security controls implementation for the ICAM implementation
            based on NIST 800-53 controls framework and DISA STIGs within a Kubernetes containerized environment.`
        },
        {
            name: "Independent Consultant",
            job: "Independent Consultant",
            description: `
            Performed threat modeling, manual code reviews, and vulnerability testing to secure a custom ASP.NET Core
            web application hosted in Microsoft Azure based on FedRAMP/NIST 800-53 controls frameworks. 
            Defined and validated mobile app security requirements using automated tools and manual source code reviews
            for a Xamarin SDK that helped developers build secure iOS/Android medical apps within DoD. 
            Deployed and hardened Active Directory based environments compliant with DoD security standards. 
            Regularly conducted network and web application vulnerability scans in order to identify vulnerabilities in the
            system and prioritize remediation efforts for a globally deployed backbone network management at a DoD agency.`
        },
        {
            name: "SAIC",
            job: "Senior Data Security Analyst",
            description: `Designed and implemented an ELK stack audit solution over three months to aid in the analysis of operating
            system, database, and application security logs. 
            Enhanced software security over one year through integrating threat modeling, web application scanning, and
            code reviews into the software development process.`
        },
    ];

    const [job, updateJob] = useState(jobArray[0]);

    const handleClick = (e) => {
        generalAssembly.current.classList.remove("is-active");
        qBase.current.classList.remove("is-active");
        gdit.current.classList.remove("is-active");
        consultant.current.classList.remove("is-active");
        saic.current.classList.remove("is-active");

        e.target.classList.add("is-active");
        updateJob(jobArray[e.target.id]);
    }

    return(
        <>
            <h1 className="title">Professional Highlights</h1>
            <h1 className="subtitle"><a href="/duffey-resume.pdf" download={true}><DownloadForOffline />Resume</a></h1>
            
            <div className="job-list-container columns">
                <aside className="menu column is-2">
                    <p className="menu-label">
                        Software Engineering
                    </p>
                    <ul className="menu-list">
                        {/* eslint-disable-next-line */}
                        <li><a id="0" onClick={handleClick} ref={generalAssembly} className="is-active">General Assembly</a></li>
                    </ul>
                    <p className="menu-label">
                        Information Technology
                    </p>
                    <ul className="menu-list">
                        {/* eslint-disable-next-line */}
                        <li><a id="1" onClick={handleClick} ref={qBase}>QBase, LLC</a></li>
                        {/* eslint-disable-next-line */}
                        <li><a id="2" onClick={handleClick} ref={gdit}>GDIT</a></li>
                        {/* eslint-disable-next-line */}
                        <li><a id="3" onClick={handleClick} ref={consultant}>Independent Consultant</a></li>
                        {/* eslint-disable-next-line */}
                        <li><a id="4" onClick={handleClick} ref={saic}>SAIC</a></li>
                    </ul>
                </aside>
                <div className="column is-10 offset-1">
                    { <Job class="job" name={job.name} job={job.job} description={job.description} /> }
                </div>
            </div>
        </>
    );
}

export default JobList