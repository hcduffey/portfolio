const Job = (props) => {
    return(
        <div className={props.class}>
            <div className="job-image-container">
                <img className="job-image" src={props.img} alt="company" />
            </div>
            <div className="job-description-container">
                <h3>{props.job}</h3>
                {props.description}
            </div>
        </div>
    )
}

export default Job;