import bgvideo from '/video.mp4'

import style from './About.module.scss'
import { useState } from 'react'

const About = () => {

	const [isPlaysInLine, setIsPlaysInLine] = useState(true)

	return (
		<>
			<div className={style.container}>
				<div className={style.overlay}></div>

				<h2 className={style.title}>about your mom</h2>

				<video playsInline={isPlaysInLine} webkit-playsinline autoPlay loop muted preload onTouchStart={() => { }}  >
					<source playsinline src={bgvideo} />
				</video>
			</div>

		</>
	)
}

export { About }
