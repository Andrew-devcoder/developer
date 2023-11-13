import { useTypewriter, Cursor } from 'react-simple-typewriter'

import style from './Code.module.scss'

const Code = () => {

	const content = `
	
	.header {
		display: flex;

	}
	
	`



	const [text] = useTypewriter({
		words: [content],
		loop: {},
		deleteSpeed: 2
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
							<span>
								{text}
							</span>

							<Cursor />
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Code