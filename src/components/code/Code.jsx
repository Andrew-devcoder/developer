import { useTypewriter, Cursor } from 'react-simple-typewriter'

import style from './Code.module.scss'

const Code = () => {

	const content = `
	.container {
		max-width: 85%;
		margin: 0 auto;

  `;



	const [text] = useTypewriter({
		words: [content],
		// loop: {},
	})

	return (
		<>
			<div className={style.Layout}>
				<div className={style.container}>
					<div className={style.header}>
						<div className={style.circul}></div>
						<div className={style.circul}></div>
						<div className={style.circul}></div>
					</div>
					<div className={style.main}>
						<p>
							{text}
							<Cursor />
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Code