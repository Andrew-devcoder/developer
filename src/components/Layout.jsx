import { Routes, Route } from 'react-router-dom'

import Header from './header/Header'
import Button from './button/Button'
import { Home } from '../pages/screen/home/Home'
import { About } from '../pages/screen/about/About'
import { NotFound } from '../pages/screen/not-found/NotFound'

import Footer from './footer/Footer'

const Layout = () => {


	return (
		<>

			<Header />

			<Button scrollUp text='go to up' />

			{/* 
			<Outlet />

			*/}

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='*' element={<NotFound />} />
			</Routes>

			<Footer />
		</>
	)
}

export default Layout