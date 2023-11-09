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
						<Scrolling to='blog' spy={true} smooth={true} offset={-10} duration={500}>Blog</Scrolling>
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
