import { useLocation } from 'react-router-dom';
import { Link as Scrolling } from 'react-scroll'
import Navigation from '../navigation/Navigation'

import style from './Footer.module.scss'


const Footer = () => {

	const location = useLocation();
	const isAboutPage = location.pathname === '/about';

	return (
		<>
			<footer className={`${style.wrapper} ${isAboutPage ? style.disTransf : ''}`}>
				<div className={`${style.container} ${isAboutPage ? style.disTransf : ''}`}>
					<nav className={style.navigation}>

						<Scrolling
							to='header'
							spy={true}
							smooth={true}
							offset={-75}
							duration={500}
						>
							<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="2.586 66.379 250.828 124.639" width="60"><g fill="none" fillRule="evenodd"><path d="m102.907 106.981-66.897 40.034c-9.6 5.83-22.009 2.773-27.716-6.83-5.708-9.601-2.552-22.112 7.048-27.942l66.897-40.034c9.6-5.83 22.009-2.773 27.716 6.83s2.552 22.112-7.048 27.942z" fill="#ea4335" /><path d="m82.153 185.617-66.182-38.053c-9.742-5.4-13.214-17.764-7.754-27.614s17.784-13.457 27.527-8.057l66.182 38.054c9.743 5.4 13.214 17.763 7.754 27.613s-17.784 13.458-27.527 8.057z" fill="#4285f4" /><path d="m173.847 185.617 66.182-38.053c9.742-5.4 13.214-17.764 7.754-27.614s-17.784-13.457-27.527-8.057l-66.182 38.054c-9.743 5.4-13.214 17.763-7.754 27.613s17.784 13.458 27.527 8.057z" fill="#fbbc04" /><path d="m153.093 106.981 66.897 40.034c9.6 5.83 22.009 2.773 27.716-6.83 5.708-9.601 2.552-22.112-7.048-27.942l-66.897-40.034c-9.6-5.83-22.009-2.773-27.716 6.83s-2.552 22.112 7.048 27.942z" fill="#0f9d58" /></g></svg>
						</Scrolling>

						<Navigation isFooter={true} />

					</nav>
					<p>
						2023
					</p>
				</div>
			</footer>
		</>
	)
}

export default Footer