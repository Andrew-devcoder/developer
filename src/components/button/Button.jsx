import { useEffect, useState, forwardRef } from 'react';
import { motion } from "framer-motion"

import style from './Button.module.scss';

const Button = forwardRef(({ text, myStyle, scrollUp, onClick, id }, ref) => {

	const customStyle = `${style.button} ${myStyle}`;

	const initialScrollTop = { y: 100 }
	const scrolledUpValue = { y: 0 }

	const [scrollTop, setScrollTop] = useState(initialScrollTop);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setScrollTop(scrolledUpValue)
			} else {
				setScrollTop(initialScrollTop)
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
					className={customStyle}
					onClick={onClick}
					id={id}
				>
					{text}
				</button>
			}
		</>
	);
});

export default Button;


export const MButton = motion(Button)