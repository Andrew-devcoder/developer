import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"

import style from './Button.module.scss';

const Button = ({ text, myStyle, scrollUp }) => {
	const customStyle = `${style.button} ${myStyle}`;
	const [goToUp, setGoToUp] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (scrollUp && window.scrollY > 100 && !goToUp) {
				setGoToUp(true);
			} else if (goToUp && window.scrollY <= 100) {
				setGoToUp(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollUp, goToUp]);

	const scrollToUp = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<AnimatePresence>
			<motion.button
				className={`${customStyle} ${goToUp ? style.scrollUp : style.scrollUpNotVisible}`}
				onClick={scrollUp ? scrollToUp : null}

				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.4 }}
			>
				{text}
			</motion.button>

		</AnimatePresence>
	);
};

export default Button;
