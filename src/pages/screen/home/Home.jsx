import Intro from '../../../components/intro/Intro'
import IconsBlock from '../../../components/block-with-icons/IconsBlock'
import Playments from '../../../components/playments/Playments'
import Cards from '../../../components/cards/Cards'
import Tabs from '../../../components/tabs/Tabs'
import TextCenter from '../../../components/text-center/TextCenter'
import style from './Home.module.scss'

const Home = () => {


	return (
		<>

			<Intro />
			<TextCenter />
			<IconsBlock />
			<Cards />
			<Playments />
			<Tabs />

		</>
	)
}

export { Home }


