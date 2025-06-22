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
                <a href="https://www.x.com/muokacharles2/" className="home__social-icon" target="_blank">
                    <i className="uil uil-twitter"></i>
                </a>

                <a href="https://www.youtube.com/charlesmuoka/" className="home__social-icon" target="_blank">
                    <i className="uil uil-youtube"></i>
                </a>

                <a href="https://in.linkedin.com/in/muokacharles" className="home__social-icon" target="_blank">
                    <i className="uil uil-linkedin"></i>
                </a>

                <a href="https://github.com/charlex123" className="home__social-icon" target="_blank">
                    <i className="uil uil-github-alt"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Charles Muoka. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer