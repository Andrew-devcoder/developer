import { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { motion, AnimatePresence } from "framer-motion"
import style from './NavMobile.module.scss'

import { Link } from 'react-router-dom'

const NavMobile = () => {

	const [isOpen, setOpen] = useState(false)

	const handleBodyOverflow = () => {
		document.body.style.overflow = isOpen ? 'hidden' : 'auto';
		document.body.style.position = isOpen ? 'fixed' : 'static';
	};

	handleBodyOverflow();

	return (
		<>
			<div className={style.visible}>

				<Hamburger toggled={isOpen} toggle={setOpen} rounded />

				<AnimatePresence>
					{isOpen && <motion.div className={style.menuList}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.4 }}
					>
						<nav>
							<ul>
								<motion.li
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ type: "spring" }}
								>
									<Link to='/'>Home</Link>
								</motion.li>
								<li>
									{/* <Scrolling to='skills' spy={true} smooth={true} offset={-100} duration={500}>skills</Scrolling> */}
								</li>
								<motion.li
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ type: "spring" }}
								>
									<Link to='/about'>About</Link>
								</motion.li>
							</ul>
						</nav>

					</motion.div>}
				</AnimatePresence>

			</div >

		</>
	)
}

export default NavMobile