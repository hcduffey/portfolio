const Job = (props) => {
    return(
        <div className="box">
            <h2 className="subtitle">{props.job}</h2>
            {props.description} 
        </div>
    )
}

export default Job;