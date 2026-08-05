/* eslint-disable no-unused-vars */
import React from 'react';
import "./projects.css";
import Projects from './projects';

const Project = () => {
  return (
    <section className="work section" id='projects'>
        <h2 className="section__title">Selected Work 🧑🏻‍💻</h2>
        <span className="section__subtitle">Products I have architected, built and shipped</span>

        <Projects />
    </section>
  )
}

export default Project