import { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { motion, AnimatePresence } from "framer-motion"
import { Link } from 'react-router-dom'

import Navigation from '../navigation/Navigation'

import style from './NavMobile.module.scss'

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

						<Navigation isOpen={isOpen} />

					</motion.div>}
				</AnimatePresence>

			</div >

		</>
	)
}

export default NavMobile