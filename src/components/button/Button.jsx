import { useEffect, useState, forwardRef } from 'react';
import { motion, AnimatePresence } from "framer-motion"

import style from './Button.module.scss';

const Button = forwardRef(({ text, myStyle, scrollUp }, ref) => {

	const customStyle = `${style.button} ${myStyle}`;
	const [goToUp, setGoToUp] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setGoToUp(scrollUp && window.scrollY > 100);
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

		<AnimatePresence>
			{scrollUp ? (
				<motion.button
					ref={ref}
					className={`${customStyle} ${style.scrollUp}`}
					onClick={scrollUp ? scrollToUp : null}
				>
					{text}
				</motion.button>
			) :
				<button
					ref={ref}
					className={customStyle}>
					{text}
				</button>
			}
		</AnimatePresence>
	);
});

export default Button;


export const MButton = motion(Button)