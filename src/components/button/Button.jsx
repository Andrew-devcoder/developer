import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"

import style from './Button.module.scss';

const Button = ({ text, myStyle, scrollUp }) => {

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
					className={`${customStyle} ${style.scrollUp}`}
					onClick={scrollUp ? scrollToUp : null}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.4 }}
				>
					{text}
				</motion.button>
			) :
				<button className={customStyle}>
					{text}
				</button>
			}
		</AnimatePresence>
	);
};

export default Button;
