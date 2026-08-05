/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../src/assets/logo.png'
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title"><img src={logo} alt='logo' style={{width: '100px'}}/></h1>

            <ul className="footer__list">
                <li>
                    <a href="#projects" className="footer__link">Work</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li>
                    <a href="#experience" className="footer__link">Experience</a>
                </li>

                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.x.com/charlesmuoka2/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="uil uil-twitter"></i>
                </a>

                <a href="https://www.youtube.com/charlesmuoka/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="uil uil-youtube"></i>
                </a>

                <a href="https://www.linkedin.com/in/muokacharles" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="uil uil-linkedin"></i>
                </a>

                <a href="https://github.com/charlex123" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="uil uil-github-alt"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; {new Date().getFullYear()} Charles Muoka. All rights reserved.</span>
        </div>
    </footer>
  )
}

export default Footer