/* eslint-disable no-unused-vars */
import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get In Touch 📩</h2>
        <span className="section__subtitle">Open to machine learning and software engineering roles. <br/> Tell me about the team and what you are building &mdash; I reply to every message.</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk To Me<i className="uil uil-calling"></i></h3>

                <div className="contact__info">

                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">charlesmuoka1@gmail.com</span>

                        <a href="mailto:charlesmuoka1@gmail.com" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-linkedin contact__card-icon"></i>

                        <h3 className="contact__card-title">LinkedIn</h3>
                        <span className="contact__card-data">in/muokacharles</span>

                        <a href="https://www.linkedin.com/in/muokacharles" target="_blank" rel="noopener noreferrer" className="contact__button">Connect <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">WhatsApp</h3>
                        <span className="contact__card-data">(+234) 806 638 7342</span>

                        <a href="https://wa.me/2348066387342?text=Hello%20Charles%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect." target="_blank" rel="noopener noreferrer" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
