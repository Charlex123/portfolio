/* eslint-disable no-unused-vars */
import React from 'react';
import "./projects.css";
import Projects from './projects';

const Project = () => {
  return (
    <section className="work section" id='projects'>
        <h2 className="section__title">Projects 🧑🏻‍💻</h2>
        <span className="section__subtitle">Most Recent Projects</span>

        <Projects />
    </section>
  )
}

export default Project