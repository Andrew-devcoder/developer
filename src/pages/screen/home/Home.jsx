import Intro from '../../../components/intro/Intro'
import TextCenter from '../../../components/text-center/TextCenter'
import IconsBlock from '../../../components/block-with-icons/IconsBlock'
import Cards from '../../../components/cards/Cards'
import Playments from '../../../components/playments/Playments'
import Tabs from '../../../components/tabs/Tabs'
import SendMail from '../../../components/send-mail/SendMail'

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

			{/* test */}
			<SendMail />

		</>
	)
}

export { Home }


