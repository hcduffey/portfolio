import Menu from "./Menu";

const Nav = (props) => {
    return (
        <div className="nav-bar">
            <div className="brand">
                <span className="name">{props.name} </span> 
                <span className="motto">{props.motto}</span>
            </div>
            <Menu />
        </div>
    )
}

export default Nav;