import Intro from '../../../components/intro/Intro'
import IconsBlock from '../../../components/block-with-icons/IconsBlock'
import style from './Home.module.scss'

const Home = () => {


	return (
		<>

			<Intro />
			<IconsBlock />

			<h1 className={style.container}>hi mom</h1>
			<h2 id="blog" className={style.container}>Blog matherfucker</h2>
		</>
	)
}

export { Home }


