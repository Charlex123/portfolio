// eslint-disable-next-line no-unused-vars
import React from 'react';

const Info = () => {
	return (
		<div className='about__info grid'>
			<div className='about__box'>
				<i className='bx bx-award about__icon'></i>

				<h3 className='about__title'>Experience</h3>
				<span className='about__subtitle'>Shipping since 2017</span>
			</div>

			<div className='about__box'>
				<i className='bx bx-briefcase-alt about__icon'></i>

				<h3 className='about__title'>Delivered</h3>
				<span className='about__subtitle'>22 flagship products</span>
			</div>

			<div className='about__box'>
				<i className='bx bx-shield-quarter about__icon'></i>

				<h3 className='about__title'>Leading</h3>
				<span className='about__subtitle'>CTO, NostraHealth</span>
			</div>
		</div>
	);
};

export default Info;
