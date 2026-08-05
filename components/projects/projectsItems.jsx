/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { ACCESS } from './Data';

/* Deterministic cover art per category — used when a product has no public screenshot. */
const CATEGORY_ART = {
	'AI & Agents': { from: '#4f46e5', to: '#06b6d4', glyph: 'bx bx-brain' },
	'Health Tech': { from: '#0ea5e9', to: '#10b981', glyph: 'bx bx-plus-medical' },
	'Open Source': { from: '#f59e0b', to: '#ef4444', glyph: 'bx bx-git-branch' },
	Blockchain: { from: '#7c3aed', to: '#ec4899', glyph: 'bx bx-link' },
	'Web & Product': { from: '#0f766e', to: '#84cc16', glyph: 'bx bx-window-alt' },
};

const initialsOf = (title) =>
	title
		.replace(/[^\w\s]/g, '')
		.split(/\s+/)
		.filter(Boolean)
		.slice(0, 2)
		.map((w) => w[0].toUpperCase())
		.join('');

const ProjectCover = ({ item }) => {
	const art = CATEGORY_ART[item.category] || CATEGORY_ART['Web & Product'];

	if (item.image) {
		return (
			<img
				src={item.image}
				alt={`${item.title} — ${item.tagline}`}
				className='work__img'
				loading='lazy'
				decoding='async'
			/>
		);
	}

	return (
		<div
			className='work__cover'
			style={{ '--cover-from': art.from, '--cover-to': art.to }}
			role='img'
			aria-label={`${item.title} — ${item.tagline}`}
		>
			<i className={`${art.glyph} work__cover-glyph`} aria-hidden='true'></i>
			<span className='work__cover-initials'>{initialsOf(item.title)}</span>
			<span className='work__cover-category'>{item.category}</span>
		</div>
	);
};

const ProjectsItems = ({ item }) => {
	const [showPreview, setShowPreview] = useState(false);
	const [expanded, setExpanded] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const previewTimeoutRef = useRef(null);

	const isProprietary = item.access === ACCESS.PROPRIETARY;
	const hasDemo = Boolean(item.demoUrl);
	const hasSource = Boolean(item.sourceUrl);
	const hasDetail = Boolean(item.highlights?.length);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth <= 768);
		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => {
			window.removeEventListener('resize', checkMobile);
			if (previewTimeoutRef.current) clearTimeout(previewTimeoutRef.current);
		};
	}, []);

	const handleMouseEnter = () => {
		if (!isMobile && hasDemo) {
			previewTimeoutRef.current = setTimeout(() => setShowPreview(true), 600);
		}
	};

	const handleMouseLeave = () => {
		if (previewTimeoutRef.current) clearTimeout(previewTimeoutRef.current);
		setShowPreview(false);
	};

	return (
		<article
			className='work__card'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className='work__media'>
				<ProjectCover item={item} />

				<span
					className={`work__badge ${
						isProprietary ? 'work__badge--closed' : 'work__badge--open'
					}`}
				>
					<i
						className={isProprietary ? 'bx bx-lock-alt' : 'bx bxl-github'}
						aria-hidden='true'
					></i>
					{isProprietary ? 'Proprietary' : 'Open Source'}
				</span>

				{!isMobile && showPreview && hasDemo && (
					<div className='work__preview'>
						<iframe
							src={item.demoUrl}
							title={`Live preview of ${item.title}`}
							className='work__preview-iframe'
							loading='lazy'
							sandbox='allow-scripts allow-same-origin'
						/>
						<div className='work__preview-overlay'>
							<button
								type='button'
								className='work__preview-button'
								onClick={() => window.open(item.demoUrl, '_blank', 'noopener')}
							>
								Open Live Site
							</button>
						</div>
					</div>
				)}
			</div>

			<div className='work__body'>
				<div className='work__heading'>
					<h3 className='work__title'>{item.title}</h3>
					<span className='work__year'>{item.year}</span>
				</div>

				<p className='work__tagline'>{item.tagline}</p>

				<div className='work__meta'>
					<span className='work__role'>
						<i className='bx bx-user-voice' aria-hidden='true'></i> {item.role}
					</span>
					{item.metric && (
						<span className='work__metric'>
							<i className='bx bx-git-commit' aria-hidden='true'></i> {item.metric}
						</span>
					)}
				</div>

				<p className='work__summary'>{item.summary}</p>

				{hasDetail && (
					<>
						<button
							type='button'
							className='work__toggle'
							onClick={() => setExpanded((v) => !v)}
							aria-expanded={expanded}
						>
							{expanded ? 'Hide details' : 'What I built'}
							<i
								className={`bx ${expanded ? 'bx-chevron-up' : 'bx-chevron-down'}`}
								aria-hidden='true'
							></i>
						</button>

						{expanded && (
							<ul className='work__highlights'>
								{item.highlights.map((point) => (
									<li key={point}>
										<i
											className='bx bx-check work__highlight-icon'
											aria-hidden='true'
										></i>
										<span>{point}</span>
									</li>
								))}
							</ul>
						)}
					</>
				)}

				<ul className='work__stack'>
					{item.stack.map((tech) => (
						<li key={tech} className='work__chip'>
							{tech}
						</li>
					))}
				</ul>

				<div className='work__button-container'>
					{hasDemo && (
						<a
							href={item.demoUrl}
							className='work__button work__button--primary'
							target='_blank'
							rel='noopener noreferrer'
						>
							<i className='bx bx-globe work__button-icon' aria-hidden='true' /> Live Site
						</a>
					)}

					{hasSource && (
						<a
							href={item.sourceUrl}
							className='work__button'
							target='_blank'
							rel='noopener noreferrer'
						>
							<i className='bx bxl-github work__button-icon' aria-hidden='true' /> Source
						</a>
					)}

					{isProprietary && !hasSource && (
						<span
							className='work__button work__button--muted'
							title='Commercial product — source code is not public'
						>
							<i className='bx bx-lock-alt work__button-icon' aria-hidden='true' /> Source
							private
						</span>
					)}
				</div>

				{isProprietary && (
					<p className='work__note'>
						Proprietary product — source code is closed. Happy to walk through the
						architecture on a call.
					</p>
				)}
			</div>
		</article>
	);
};

export default ProjectsItems;
