
import TextButton from '../text-with-button/TextButton'
import Code from '../code/Code'


import style from './Intro.module.scss'

const Intro = () => {

	return (
		<>
			<div className={style.container}>

				<TextButton />
				<Code />

			</div>
		</>
	)
}

export default Intro