import bgvideo from '/video.mp4'

import style from './About.module.scss'

const About = () => {
	return (
		<>

			<div className={style.container}>
				<div className={style.overlay}></div>

				<h2 className={style.title}>about your mom</h2>

				<video autoPlay loop muted preload width='100%' height='100%' onTouchStart={() => { }} playsinline webkit-playsinline  >
					<source src={bgvideo} />
				</video>
			</div>

		</>
	)
}

export { About }
