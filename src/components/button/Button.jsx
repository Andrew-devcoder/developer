import { useEffect, useState, forwardRef } from 'react';
import { motion } from "framer-motion"

import style from './Button.module.scss';

const Button = forwardRef(({ text, myStyle, scrollUp }, ref) => {

	const customStyle = `${style.button} ${myStyle}`;

	const testY = { y: 100 }
	const testYZero = { y: 0 }

	const [scrollTop, setScrollTop] = useState(testY);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setScrollTop(testYZero)
			} else {
				setScrollTop(testY)
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollUp]);

	const scrollToUp = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};



	return (

		<>
			{scrollUp ? (
				<button
					ref={ref}
					style={{ transform: `translateY(${scrollTop.y}px)` }}
					className={`${customStyle} ${style.scrollUp}`}
					onClick={scrollToUp}
				>
					{text}
				</button>
			) :
				<button
					ref={ref}
					className={customStyle}>
					{text}
				</button>
			}
		</>
	);
});

export default Button;


export const MButton = motion(Button)