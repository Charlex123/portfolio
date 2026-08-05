
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './experience.css';

const EXPERIENCE = [
	{
		id: 1,
		icon: 'uil uil-rocket',
		role: 'Founder & Principal Engineer',
		company: 'Zetranet Solutions Ltd',
		period: '2025 — Present',
		summary:
			'Building the product portfolio end to end — architecture, implementation and delivery of AI platforms across education, industrial operations and government.',
		bullets: [
			'Architected Satryx Forge, a vendor-neutral operating-intelligence layer for oil & gas',
			'Built MirrorMingo, a multilingual offline-first AI tutor, submitted to the Devpost OpenAI hackathon',
			'Shipped NEIP, a government education-intelligence platform for Nigerian ministries',
			'Ship the Nostra Tova agent monorepo: 16 packages, first-party Python and TypeScript SDKs',
			'Run the GPU inference tier on ClawPod across RunPod and AWS',
		],
	},
	{
		id: 2,
		icon: 'uil uil-shield-check',
		role: 'Machine Learning & Software Engineer',
		company: 'NostraHealth',
		period: '2024 — Present',
		summary:
			'Lead the engineering organisation and remain hands-on across the clinical platform, its API and every client surface.',
		bullets: [
			'Lead the development team and own the technical direction',
			'Architected the FHIR R4 clinical backend with multi-provider AI routing',
			'Delivered the Hospital Management System — ADT, CPOE, pharmacy, OR, radiology',
			'Shipped the B2B organisation console with API key lifecycle and usage analytics',
			'Supervised and contributed to the Flutter mobile application',
			'Published official SDKs in Python, TypeScript, Java and PHP',
		],
	},
	{
		id: 3,
		icon: 'uil uil-bitcoin-circle',
		role: 'Software Developer',
		company: 'FifaReward',
		period: '2021 — 2024',
		summary:
			'Built the blockchain rewards platform end to end — contracts, application, infrastructure and the game economy on top.',
		bullets: [
			'Wrote and deployed the reward smart contracts on-chain',
			'Built the web application front to back',
			'Provisioned the AWS cloud infrastructure',
			'Set up the GitHub Actions CI/CD pipeline',
			'Built the Telegram tap-to-earn game in Python on the Bot API',
		],
	},
	{
		id: 4,
		icon: 'uil uil-web-grid',
		role: 'Freelance Web Developer',
		company: 'Fiverr',
		period: '2017 — 2021',
		summary:
			'Delivered and maintained websites and web applications for clients across several industries.',
		bullets: [
			'Designed and built client websites to brief and on deadline',
			'Maintained and supported live sites post-launch',
			'Built a repeat client base on consistent delivery',
		],
	},
];

const Experience = () => {
	const [openId, setOpenId] = useState(null);

	return (
		<div className='section experience section' id='experience'>
			<h2 className='section__title'>Experience 💼</h2>
			<span className='section__subtitle'>
				Nine years of building, four of them leading
			</span>

			<div className='exp__container container grid'>
				{EXPERIENCE.map((item) => (
					<div className='exp__content' key={item.id}>
						<div>
							<i className={`${item.icon} exp__icon`}></i>
							<h3 className='exp__title'>{item.role}</h3>
						</div>

						<div>
							<span className='exp__comp'>{item.company}</span>
						</div>

						<div>
							<span className='exp__period'>{item.period}</span>
						</div>

						<button
							type='button'
							className='exp__button'
							onClick={() => setOpenId(item.id)}
						>
							View More <i className='uil uil-arrow-right exp__button-icon'></i>
						</button>

						<div
							className={openId === item.id ? 'exp__modal active-modal' : 'exp__modal'}
							onClick={(e) => e.target === e.currentTarget && setOpenId(null)}
						>
							<div className='exp__modal-content'>
								<i
									onClick={() => setOpenId(null)}
									className='uil uil-times exp__modal-close'
								></i>

								<h3 className='exp__modal-title'>
									{item.role}
									<br />
									<span className='exp__modal-company'>
										{item.company} · {item.period}
									</span>
								</h3>
								<p className='exp__modal-description'>{item.summary}</p>

								<ul className='exp__modal-experiences grid'>
									{item.bullets.map((bullet) => (
										<li className='exp__modal-experience' key={bullet}>
											<i className='uil uil-check-circle exp__modal-icon'></i>
											<p className='exp__modal-info'>{bullet}</p>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
