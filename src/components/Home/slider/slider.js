import React from 'react';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animatins.css';
import './slider.css';

const content = [
	{
		title: 'WELCOME TO LAKE NATIONAL SACCO',
		description:
		'Empowering for reaching greate heights',
		button: 'Read More',
		image: require('./slider/img1.JPG')
		},
	{
		title: 'LOOKING FOR FUNDS??',
		description:
		'Enjoy our fast, simple and competitive benefit on loans.',
		button: 'our loan products',
		image:  require('./slider/money.jpeg')
	},
	{
		title: 'START SAVING WITH US',
		description:
		'Grow your potential by saving daily and enhance your financial capabilities.',
		button: 'Start now',
		image:  require('./slider/save.jpg')
	},
	{
		title: 'YOUR LISTENING PATNER',
		description:
		'We are moving forward with you',
		button: 'Join Now',
		image:  require('./slider/img5.JPG')
	},
	
];

const Slider1 = () => (
	<div>
	
	<Slider autoplay={4000}>
	{content.map((item, index) => (
		<div
			key={index}
			style={{ background: `url('${item.image}') no-repeat center center` }}
		>
			<div className="center">
				<h1 className = 'title1'>{item.title}</h1>
				<p className = "slide-paragraph">{item.description}</p>
				<button className = 'btnslide'>{item.button}</button>
			</div>
		</div>
	))}
</Slider>
		
	</div>
);

export default Slider1;
