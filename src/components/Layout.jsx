import { Routes, Route } from 'react-router-dom'
import Header from './header/Header'

import { Home } from '../pages/screen/home/Home'
import { About } from '../pages/screen/about/About'

import Footer from './footer/Footer'

const Layout = () => {

	return (
		<>
			<Header />

			{/* 
			<Outlet />

			*/}

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
			</Routes>

			<Footer />
		</>
	)
}
export default Layout