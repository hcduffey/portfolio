import { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Nav = () => {
    const [isActive, setisActive] = useState(false);

    return (
        <nav className="navbar is-transparent is-fixed-top">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <span className="name">Cliff Duffey</span>
                </a>
                {/* We need the <a> tag to href to nowhere - which creates a warning, the line below disables that warning */}
                {/* eslint-disable-next-line */}
                <a
                    onClick={() => { setisActive(!isActive); }}
                    role="button"
                    className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                    href="#"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div
                id="navbarBasicExample"
                className={`navbar-menu ${isActive ? "is-active" : ""}`}
            >
                <div className="navbar-end">
                    <a onClick={() => { setisActive(!isActive); }} className="navbar-item" rel="noreferrer" target="_blank" href="https://linkedin.com/in/cduffey">
                        <LinkedInIcon alt="LinkedIn" />
                    </a>
                    <a onClick={() => { setisActive(!isActive); }} className="navbar-item" rel="noreferrer" target="_blank" href="https://github.com/hcduffey">
                        <GitHubIcon alt="GitHub" />
                    </a>
                    <a onClick={() => { setisActive(!isActive); }} className="navbar-item" rel="noreferrer" target="_blank" href="mailto:cliff.duffey@pm.me">
                        <EmailIcon alt="E-mail" />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;