/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
    const[toggleState, setToggleState] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="section experience section" id="experience">
        <h2 className="section__title">Experience 💼</h2>
        <span className="section__subtitle">My Work Experience</span>

        <div className="exp__container container grid">
            <div className="exp__content">
                <div>
                    <i className="uil uil-web-grid exp__icon"></i>
                    <h3 className="exp__title">Free Lance Web <br /> Developer <br />  </h3>
                </div>

                <div>
                    <span className="exp__comp">Fiverr</span>
                </div>

                <div>
                    <span className="exp__comp">2017 - 2021</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Web Developer FreeLancer At Fiverr <br /> 2017 - 2021</h3>
                        <p className="exp__modal-description">Provided web development freelancing at Fiverr.
                            Providing quality work to clients and company.
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">I create websites for clients</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">I manage the websites</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="exp__content">
                <div>
                    <i className="uil uil-arrow exp__icon"></i>
                    <h3 className="exp__title">Software <br /> Developer at Fifareward <br/> </h3>
                </div>

                <div>
                    <span className="exp__comp">Fifareward</span>
                </div>

                <div>
                    <span className="exp__comp">2021-2022</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 2 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Software Developer at Fifareward <br /> 2021 - 2024</h3>
                        <p className="exp__modal-description">Worked at Fifareward.
                            Deployed Aws cloud infrastructure and built the web app, wrote smart contracts and deployed on blockhain. 
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Deployed on AWS Cloud.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Built the web app</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Deployed the CI/CD github action.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Built telegram tap bot game using python and telegram bot api.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Wrote deployed smart contracts on the blockchain</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="exp__content">
                <div>
                    <i className="uil uil-arrow exp__icon"></i>
                    <h3 className="exp__title">CTO <br /> at NostraHealth <br/> </h3>
                </div>

                <div>
                    <span className="exp__comp">NostraHealth</span>
                </div>

                <div>
                    <span className="exp__comp">2024-till Date</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 3 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Chief Technical Officer at NostraHealth <br /> 2024 - till Date</h3>
                        <p className="exp__modal-description">Worked at NostraHealth.
                            Headed the development team at NostraHealth. 
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Leads the development team.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Built the web app</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Supervised and contributed in building the flutter app.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Experience