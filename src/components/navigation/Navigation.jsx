import { Link as Scrolling } from 'react-scroll'
import { Link, Outlet, useLocation } from 'react-router-dom'

import style from './Navigation.module.scss'

const Navigation = ({ isOpen, onClose, isFooter }) => {
	const location = useLocation();
	const pageAbout = location.pathname === '/about'

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
						<ul className={isFooter ? style.footer : style.desktop}>
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
							<li className={pageAbout ? style.mark : ''}>
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
									offset={90}
									duration={800}
								>
									Contact us
								</Scrolling>
							</li>
							{isFooter ?
								<>
									<li></li>
									<li><a href="#">Github</a></li>
									<li><a href="#">Upwork</a></li>
									<li><a href="#">Fiverr</a></li>
								</>
								: null
							}
						</ul>
					</>
				}
			</nav >
		</>
	)
}

export default Navigation

