import { Link as Scrolling } from 'react-scroll';
import { Link, Outlet } from 'react-router-dom'


const Navigation = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Scrolling to='skills' spy={true} smooth={true} offset={-100} duration={500}>skills</Scrolling>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Navigation
