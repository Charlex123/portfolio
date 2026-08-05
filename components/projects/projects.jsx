/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from 'react';
import { projectsData, projectsNav, ACCESS } from './Data';
import ProjectsItems from './projectsItems';

const Projects = () => {
	const [active, setActive] = useState('all');

	const counts = useMemo(() => {
		const map = { all: projectsData.length };
		projectsData.forEach((p) => {
			map[p.category] = (map[p.category] || 0) + 1;
		});
		return map;
	}, []);

	const projects = useMemo(
		() =>
			active === 'all'
				? projectsData
				: projectsData.filter((project) => project.category === active),
		[active]
	);

	const proprietaryCount = projectsData.filter(
		(p) => p.access === ACCESS.PROPRIETARY
	).length;

	return (
		<div>
			<p className='work__intro'>
				{projectsData.length} shipped products across AI platforms, clinical systems,
				blockchain and the open-source tooling underneath them.{' '}
				<strong>{proprietaryCount}</strong> are proprietary commercial products whose
				source stays closed — the architecture is described on each card.
			</p>

			<div className='work__filters'>
				{projectsNav.map((nav) => (
					<button
						type='button'
						key={nav.name}
						onClick={() => setActive(nav.name)}
						className={`work__item ${active === nav.name ? 'active-work' : ''}`}
						aria-pressed={active === nav.name}
					>
						{nav.label}
						<span className='work__item-count'>{counts[nav.name] || 0}</span>
					</button>
				))}
			</div>

			<div className='work__container container grid'>
				{projects.map((item) => (
					<ProjectsItems item={item} key={item.id} />
				))}
			</div>

			<div className='work__more'>
				Plus client platforms, trading bots and internal tooling not listed here —{' '}
				<a
					href='https://github.com/Charlex123?tab=repositories'
					target='_blank'
					rel='noopener noreferrer'
				>
					browse the public repositories
				</a>
				.
			</div>
		</div>
	);
};

export default Projects;
