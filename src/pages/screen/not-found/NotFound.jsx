import style from './NotFound.module.scss'
import { Link } from 'react-router-dom'
import Button from '../../../components/button/Button'

const NotFound = () => {
	return (
		<>
			<div className={style.container}>
				<h2>
					404
				</h2>
				<p><span>error</span></p>
				<p>page not found</p>
				<Link to="/"><Button text="Go Home" /></Link>
			</div>
		</>
	)
}

export { NotFound } 