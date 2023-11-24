import bgvideo from '/video.mp4'
import ReactPlayer from 'react-player'

import style from './About.module.scss'

const About = () => {


	return (
		<>
			<div className={style.container}>
				<div className={style.overlay}></div>

				<h2 className={style.title}>about your mom</h2>

				<ReactPlayer
					url={bgvideo}
					width="100%"
					height="100vh"
					playing={true}
					volume={null}
					muted={true}
					playsinline
					loop
				>

				</ReactPlayer>
				{/* <video playsInline autoPlay loop muted preload>
					<source src={bgvideo} />
				</video> */}
			</div>

		</>
	)
}

export { About }
