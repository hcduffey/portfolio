const Icon = (props) => {
    return(
        <div className="icon-container">
            <a href={props.icon.url}><img className="icon" src={props.icon.img} alt="icon" /></a>
            <a href={props.icon.url}>{props.icon.name}</a>
        </div>
    );
}

export default Icon;