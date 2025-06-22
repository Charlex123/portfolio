// eslint-disable-next-line no-unused-vars
import React from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import Coursework from './Coursework';
import DataBases from './Database';
import CloudCompute from './CloudCompute';
import './skills.css'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills 🛠️</h2>
      <span className="section__subtitle">My Technical Expertise</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <DataBases />
        <CloudCompute />
        <Coursework />
      </div>
    </section>
  )
}

export default Skills