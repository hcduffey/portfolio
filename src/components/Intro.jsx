const Intro = () => {
    return(
    <div className="intro-container">
        <div className="card">
            <div className="card-content">
                <div className="card-content-container">
                    <div className="headshot-container">
                        <img src="head_shot.png" alt="headshot" />
                    </div>
                    <div className="intro-text">
                        <p>Hi! I'm a cybersecurity engineer turned web developer, motivated by the desire to start building software instead of breaking it. I'm driven to apply my security-focused mindset towards protecting user data and ensuring privacy in developing software that users love.</p>     
                        <br />
                        <p>Take a look at some of my favorite projects below, and reach out anytime.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Intro;