import { Link as Scrolling } from 'react-scroll'
import { Link, Outlet } from 'react-router-dom'

import style from './Navigation.module.scss'

const Navigation = ({ isOpen, onClose, isFooter }) => {


	return (
		<>
			<nav className={isOpen ? style.mobile : style.desktop} >

				{isOpen ?
					<ul>
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
								Services
							</Scrolling>

						</li>
						<li>
							<Link
								to='/about'
								onClick={() => {
									onClose();
								}}
							>
								About us
							</Link>
						</li>
						<li>
							<a href="#">
								Technologies
							</a>
						</li>
						<li>
							<a href="#">
								Case study
							</a>
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
					:
					<>
						<ul className={isFooter && style.footer}>
							<li>
								<Scrolling
									to='skills'
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
								>
									Services
								</Scrolling>

							</li>
							<li>
								<Link
									to='/about'
								>
									About us
								</Link>
							</li>
							<li>
								<a href="#">
									Technologies
								</a>
							</li>
							<li>
								<a href="#">
									Case study
								</a>
							</li>
							<li>
								<Scrolling
									to="contact"
									spy={true}
									smooth={true}
									offset={0} duration={800}
								>
									Contact us
								</Scrolling>
							</li>
							<li><a href="#">Github</a></li>
							<li><a href="#">Upwork</a></li>
							<li><a href="#">Fiverr</a></li>
						</ul>
					</>
				}
			</nav >
		</>
	)
}

export default Navigation

