import { Link } from "react-router-dom";

const Menu = () => {

    const menuLinks = [
        {name: "home", href: "/"},
        {name: "about", href: "/about"},
        {name: "experience", href: "/resume"},
        {name: "meta", href: "/meta"},
        {name: "contact", href: "/contact"}
    ];

    return(
        <div className="menu">
            <ul className="menu-list">
            {menuLinks.map((link, idx) => {
                return(
                    idx === menuLinks.length-1 ?
                    <li key={idx}><Link to={link.href}>{link.name}</Link></li>
                    :
                    <li key={idx}><Link to={link.href}>{link.name}</Link>,&nbsp;</li>
                );
            })}
            </ul>
        </div>
    )
}

export default Menu;