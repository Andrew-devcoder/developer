import bgvideo from '/video.mp4'

import style from './About.module.scss'

const About = () => {


	return (
		<>
			<div className={style.container}>
				<div className={style.overlay}></div>

				<h2 className={style.title}>about your mom</h2>

				<video playsInline playsinline webkit-playsinline autoPlay loop muted preload onTouchStart={() => { }}  >
					<source playsinline src={bgvideo} />
				</video>
			</div>

		</>
	)
}

export { About }
