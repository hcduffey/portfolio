const Job = (props) => {
    return(
        <div className={props.class}>
            <img className="job-image" src={props.img} alt="company" />
            <h3>{props.job}</h3>
            <span className="job-description">
                {props.description}
            </span>
        </div>
        
    )
}

export default Job;