const Icon = (props) => {
    return(
        <div className="icon-container">
            <a href={props.icon.url}><img className="icon" src={props.icon.img} alt="icon" /></a>
        </div>
    );
}

export default Icon;