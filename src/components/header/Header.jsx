import { Link, Outlet, useLocation } from 'react-router-dom'
import Navigation from '../navigation/Navigation';
import NavMobile from '../nav-mobile/NavMobile'

import style from './Header.module.scss'

const Header = () => {

	const location = useLocation();
	const pageAbout = location.pathname === '/about';

	return (
		<>
			<header className={`${style.container} ${pageAbout ? style.positionAbsolute : ''}`} id='header'>

				<Link to='/'>
					<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="2.586 66.379 250.828 124.639" width="60"><g fill="none" fillRule="evenodd"><path d="m102.907 106.981-66.897 40.034c-9.6 5.83-22.009 2.773-27.716-6.83-5.708-9.601-2.552-22.112 7.048-27.942l66.897-40.034c9.6-5.83 22.009-2.773 27.716 6.83s2.552 22.112-7.048 27.942z" fill="#ea4335" /><path d="m82.153 185.617-66.182-38.053c-9.742-5.4-13.214-17.764-7.754-27.614s17.784-13.457 27.527-8.057l66.182 38.054c9.743 5.4 13.214 17.763 7.754 27.613s-17.784 13.458-27.527 8.057z" fill="#4285f4" /><path d="m173.847 185.617 66.182-38.053c9.742-5.4 13.214-17.764 7.754-27.614s-17.784-13.457-27.527-8.057l-66.182 38.054c-9.743 5.4-13.214 17.763-7.754 27.613s17.784 13.458 27.527 8.057z" fill="#fbbc04" /><path d="m153.093 106.981 66.897 40.034c9.6 5.83 22.009 2.773 27.716-6.83 5.708-9.601 2.552-22.112-7.048-27.942l-66.897-40.034c-9.6-5.83-22.009-2.773-27.716 6.83s-2.552 22.112 7.048 27.942z" fill="#0f9d58" /></g></svg>
				</Link>

				<Navigation />


				<NavMobile />

			</header >
		</>
	)
}

export default Header