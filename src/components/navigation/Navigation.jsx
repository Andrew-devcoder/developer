import { Link as Scrolling } from 'react-scroll';
import { Link, Outlet } from 'react-router-dom'
import style from './Navigation.module.scss'


const Navigation = () => {
	return (
		<>
			<nav className={style.visible}>
				<ul>
					<li>
						<Scrolling to='skills' spy={true} smooth={true} offset={-100} duration={500}>skills</Scrolling>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li><Scrolling to="conctact" spy={true} smooth={true} offset={0} duration={800}>Contact us</Scrolling></li>
				</ul>
			</nav>
		</>
	)
}

export default Navigation
