import { Link as Scrolling } from 'react-scroll'
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
						{isOpen ? <Scrolling
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
							: <Scrolling
								to='skills'
								spy={true}
								smooth={true}
								offset={-100}
								duration={500}
							>
								skills
							</Scrolling>
						}
					</li>
					<li>
						{isOpen ? <Link
							to='/about'
							onClick={() => {
								onClose();
							}}
						>
							About
						</Link>
							: <Link
								to='/about'
							>
								About
							</Link>
						}
					</li>
					<li>
						{isOpen ? <Scrolling
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
							: <Scrolling
								to="contact"
								spy={true}
								smooth={true}
								offset={0} duration={800}
							>
								Contact us
							</Scrolling>
						}
					</li>
				</ul>
			</nav >

		</>
	)
}

export default Navigation

