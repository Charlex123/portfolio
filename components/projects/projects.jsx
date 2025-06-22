/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { projectsData } from './Data';
import ProjectsItems from './projectsItems';

const Projects = () => {
    const[item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(false);

    useEffect(() => {
        if(item.name === "all") {
            setProjects(projectsData);
        } else {
          const newProjects = projectsData.filter((project) => {
            return project.category === item.name;
          });
          setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(index);
    };
  return (
    <div>
        {/* <div className="work__filters">
            {projectsNav.map((item, index) => {
                return (
                    <span onClick={(e) => {
                        handleClick(e, index);
                    }} className={`${active === index ? 'active-work' : ''} work__item`} key={index}>{item.name}</span>
                );
            })}
        </div> */}

        <div className="work__container container grid">
            {projects.map((item) => {
                return <ProjectsItems item={item} key={item.id}/>
            })}
        </div>
        <div className="work__more">
            And many more ...
        </div>
    </div>
  )
}

export default Projects