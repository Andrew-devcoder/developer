import { useState } from 'react'
import { Link as Scrolling } from 'react-scroll';
import { Link, Outlet } from 'react-router-dom'
import style from './Navigation.module.scss'


const Navigation = ({ isOpen, onClose }) => {
	return (
		<>
			<nav className={isOpen ? style.mobile : style.desktop} >
				<ul>
					{isOpen ? <li>
						<Link
							to='/'
							onClick={() => {
								onClose();
							}}
						>
							Home
						</Link>
					</li>
						: null}
					<li>
						<Scrolling
							to='skills'
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
							onClick={() => {
								onClose();
							}}
						>
							skills
						</Scrolling>
					</li>
					<li>
						<Link
							to='/about'
							onClick={() => {
								onClose();
							}}
						>
							About
						</Link>
					</li>
					<li>
						<Scrolling
							to="contact"
							spy={true}
							smooth={true}
							offset={0} duration={800}
							onClick={() => {
								onClose();
							}}
						>
							Contact us
						</Scrolling>
					</li>
				</ul>
			</nav>

		</>
	)
}

export default Navigation

