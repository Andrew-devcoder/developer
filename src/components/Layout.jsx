import { Routes, Route } from 'react-router-dom'
// import { ThemeProvider } from '../components/theme-provider/ThemeProvider'

import Header from './header/Header'

import { Home } from '../pages/screen/home/Home'
import { About } from '../pages/screen/about/About'
import { NotFound } from '../pages/screen/not-found/NotFound'

import Footer from './footer/Footer'

const Layout = () => {


	return (
		<>
			{/* <ThemeProvider> */}

			<Header />

			{/* 
			<Outlet />

			*/}

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='*' element={<NotFound />} />
			</Routes>

			<Footer />
			{/* </ThemeProvider> */}
		</>
	)
}

export default Layout