// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Header.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import logo from '../../src/assets/logo.png';

const NAV_ITEMS = [
	{ href: '#home', label: 'Home', icon: 'uil uil-estate' },
	{ href: '#projects', label: 'Work', icon: 'uil uil-scenery' },
	{ href: '#skills', label: 'Skills', icon: 'uil uil-file-alt' },
	{ href: '#experience', label: 'Experience', icon: 'uil uil-bag-alt' },
	{ href: '#about', label: 'About', icon: 'uil uil-user' },
	{ href: '#contact', label: 'Contact', icon: 'uil uil-message' },
];

const Header = () => {
	const [toggle, showMenu] = useState(false);
	const [activeNav, setActiveNav] = useState('#home');
	const [scrolled, setScrolled] = useState(false);

	/* Shrink the header on scroll and highlight the section currently in view. */
	useEffect(() => {
		const sectionIds = NAV_ITEMS.map((item) => item.href.slice(1));

		const handleScroll = () => {
			setScrolled(window.scrollY >= 80);

			const probe = window.scrollY + window.innerHeight / 3;
			let current = sectionIds[0];

			sectionIds.forEach((id) => {
				const el = document.getElementById(id);
				if (el && el.offsetTop <= probe) current = id;
			});

			setActiveNav(`#${current}`);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className={`header ${scrolled ? 'scroll-header' : ''}`}>
			<nav className='nav container'>
				<a href='#home' className='nav__logo'>
					<img src={logo} alt='Charles Muoka' width='40' height='40' />
				</a>

				<div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
					<ul className='nav__list grid'>
						{NAV_ITEMS.map((item) => (
							<li className='nav__item' key={item.href}>
								<a
									href={item.href}
									onClick={() => {
										setActiveNav(item.href);
										showMenu(false);
									}}
									className={
										activeNav === item.href ? 'nav__link active-link' : 'nav__link'
									}
								>
									<i className={`${item.icon} nav__icon`}></i> {item.label}
								</a>
							</li>
						))}

						<li className='nav__item theme-toggle-desktop'>
							<ThemeToggle />
						</li>
					</ul>
				</div>

				{!toggle && (
					<div className='theme-toggle-mobile'>
						<ThemeToggle />
					</div>
				)}

				<div
					className='nav__toggle'
					onClick={() => showMenu(!toggle)}
					role='button'
					aria-label='Toggle navigation menu'
					aria-expanded={toggle}
				>
					<i className={toggle ? 'uil uil-times' : 'uil uil-apps'}></i>
				</div>
			</nav>
		</header>
	);
};

export default Header;
