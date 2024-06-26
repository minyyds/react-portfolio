import React from "react";

const Social = () => {
    return (
    <div className="home__social">
        <a
        href="https://www.linkedin.com/in/minparekh/"
        className="home__social-icon"
        target="_blank"
        >
        <i className="uil uil-linkedin"></i>
        </a>

        <a
        href="https://www.github.com/minyyds"
        className="home__social-icon"
        target="_blank"
        >
        <i className="uil uil-github-alt"></i>
        </a>

        <a
        href="https://open.spotify.com/user/31qhggchctjgwke6ml4sfebjrbzy"
        className="home__social-icon"
        target="_blank"
        >
        <i className='bx bxl-spotify'></i>
        </a>
    </div>
    );
};

export default Social;
