import { Routes, Route } from 'react-router-dom'

import Header from './header/Header'

import MButton from './button/Button'
import { Home } from '../pages/screen/home/Home'
import { About } from '../pages/screen/about/About'
import { Store } from '../pages/screen/study-case/Store'
import { NotFound } from '../pages/screen/not-found/NotFound'

import ProductDetail from './xml/product-detail/productDetail'

import Footer from './footer/Footer'

const Layout = () => {


	return (
		<>

			<Header />


			<MButton
				text='go to up'
				scrollUp
			/>

			{/* 
			<Outlet />

			*/}

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/store' element={<Store />} />
				<Route path='/store/:id' element={<ProductDetail />} />
				<Route path='*' element={<NotFound />} />
			</Routes>

			<Footer />
		</>
	)
}

export default Layout