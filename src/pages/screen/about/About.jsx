import bgvideo from '../../../../public/video.mp4'

import style from './About.module.scss'

const About = () => {
	return (
		<>

			<div className={style.container}>
				<div className={style.overlay}></div>

				<h2 className={style.title}>about your mom</h2>

				<video src={bgvideo} autoPlay loop muted preload controls="false" onTouchStart={() => { }} />
			</div>

		</>
	)
}

export { About }
