import Menu from "./Menu";

const Nav = (props) => {
    return (
        <div className="navbar is-success is-fixed-top">
            <div className="brand">
                <span className="name">{props.name} &gt; </span> 
                <span className="motto">{props.motto}</span>
            </div>
            <div className="navbar-end">
                <Menu />
            </div>
        </div>
    )
}

export default Nav;