import Intro from '../../../components/intro/Intro'
import IconsBlock from '../../../components/block-with-icons/IconsBlock'
import Playments from '../../../components/playments/Playments'
import Cards from '../../../components/cards/Cards'
import style from './Home.module.scss'

const Home = () => {


	return (
		<>

			<Intro />
			<IconsBlock />
			<Cards />
			<Playments />
		</>
	)
}

export { Home }


