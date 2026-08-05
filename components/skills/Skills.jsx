// eslint-disable-next-line no-unused-vars
import React from 'react';
import './skills.css';

/*
 * Grouped by the way the work actually divides, and levelled against what is
 * running in production today rather than what has merely been tried once.
 */
const SKILL_GROUPS = [
	{
		title: 'AI & Machine Learning',
		icon: 'bx bx-brain',
		note: 'Agent frameworks, inference pipelines, multi-provider routing',
		skills: [
			{ name: 'LangGraph & Agent Design', level: 'Expert' },
			{ name: 'LLM Integration (Anthropic, OpenAI, Gemini, xAI)', level: 'Expert' },
			{ name: 'RAG & Vector Retrieval', level: 'Advanced' },
			{ name: 'PyTorch & CUDA Inference', level: 'Advanced' },
			{ name: 'Speech & Computer Vision', level: 'Advanced' },
		],
	},
	{
		title: 'Backend & APIs',
		icon: 'bx bx-server',
		note: 'The clinical, agent and intelligence backends behind every product',
		skills: [
			{ name: 'Node.js & TypeScript', level: 'Expert' },
			{ name: 'Python & FastAPI', level: 'Expert' },
			{ name: 'FHIR R4 & Healthcare Data', level: 'Advanced' },
			{ name: 'PostgreSQL, Redis & SQLite', level: 'Advanced' },
			{ name: 'PHP & NestJS', level: 'Proficient' },
		],
	},
	{
		title: 'Frontend & Product',
		icon: 'bx bx-layout',
		note: 'Consoles, dashboards and public product surfaces',
		skills: [
			{ name: 'React & Next.js', level: 'Expert' },
			{ name: 'TypeScript', level: 'Expert' },
			{ name: 'Vite, Zustand & React Query', level: 'Advanced' },
			{ name: 'Tailwind & Design Systems', level: 'Advanced' },
			{ name: 'PWA & Offline-First', level: 'Advanced' },
		],
	},
	{
		title: 'Mobile',
		icon: 'bx bx-mobile-alt',
		note: 'Shipped to the App Store and Play Store',
		skills: [
			{ name: 'Flutter & Dart', level: 'Advanced' },
			{ name: 'Firebase & Push Messaging', level: 'Advanced' },
			{ name: 'In-App Purchase & Entitlements', level: 'Proficient' },
		],
	},
	{
		title: 'Blockchain',
		icon: 'bx bx-link-alt',
		note: 'Contracts written and deployed to mainnet',
		skills: [
			{ name: 'Solidity & EVM', level: 'Advanced' },
			{ name: 'Solana & Anchor (Rust)', level: 'Advanced' },
			{ name: 'Web3 & Wallet Integration', level: 'Advanced' },
			{ name: 'Token & Reward Mechanics', level: 'Advanced' },
		],
	},
	{
		title: 'Cloud & Infrastructure',
		icon: 'bx bx-cloud',
		note: 'Where all of the above actually runs',
		skills: [
			{ name: 'Docker & Containerisation', level: 'Advanced' },
			{ name: 'AWS', level: 'Advanced' },
			{ name: 'GPU Orchestration (RunPod)', level: 'Advanced' },
			{ name: 'CI/CD & GitHub Actions', level: 'Advanced' },
			{ name: 'Google Cloud & Azure', level: 'Proficient' },
		],
	},
];

const LEVEL_WIDTH = {
	Expert: '95%',
	Advanced: '80%',
	Proficient: '62%',
};

const Skills = () => {
	return (
		<section className='skills section' id='skills'>
			<h2 className='section__title'>Skills 🛠️</h2>
			<span className='section__subtitle'>
				What is running in production, not what I once tried
			</span>

			<div className='skills__container container grid'>
				{SKILL_GROUPS.map((group) => (
					<div className='skills__content' key={group.title}>
						<div className='skills__header'>
							<i className={`${group.icon} skills__icon`} aria-hidden='true'></i>
							<div>
								<h3 className='skills__title'>{group.title}</h3>
								<p className='skills__note'>{group.note}</p>
							</div>
						</div>

						<ul className='skills__list'>
							{group.skills.map((skill) => (
								<li className='skills__data' key={skill.name}>
									<div className='skills__row'>
										<span className='skills__name'>{skill.name}</span>
										<span className='skills__level'>{skill.level}</span>
									</div>
									<div className='skills__bar'>
										<span
											className='skills__bar-fill'
											style={{ width: LEVEL_WIDTH[skill.level] }}
										></span>
									</div>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
