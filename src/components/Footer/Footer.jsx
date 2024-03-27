import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">min</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
            <a
                href="https://www.linkedin.com/in/minparekh/"
                className="footer__social-link lkn"
                target="_blank"
            >
            <i className="uil uil-linkedin"></i>
            </a>

            <a
            href="https://www.github.com/minyyds"
            className="footer__social-link gth"
            target="_blank"
            >
            <i className="uil uil-github-alt"></i>
            </a>

            <a
            href="https://open.spotify.com/user/31qhggchctjgwke6ml4sfebjrbzy"
            className="footer__social-link spo"
            target="_blank"
            >
            <i className='bx bxl-spotify'></i>
            </a>
            </div>
            <span className="footer__copy">enjoy the experience.</span>
        </div>
    </footer>
    )
}

export default Footer