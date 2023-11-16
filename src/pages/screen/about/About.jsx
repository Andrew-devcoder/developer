import bgvideo from '../../../../public/video.mp4'

import style from './About.module.scss'

const About = () => {
	return (
		<>

			<div className={style.container}>

				<h2 className={style.title}>about your mom</h2>

				<video src={bgvideo} autoPlay loop muted />
			</div>

		</>
	)
}

export { About }
