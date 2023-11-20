import { useRef } from 'react'
import { useScroll, AnimatePresence, motion } from 'framer-motion'
import style from './TextCenter.module.scss'

const TextCenter = () => {
	const ref = useRef(null)

	const { scrollYProgress } = useScroll({
		target: '',
		offset: ["0 1", "1.33 1"]
	})

	return (
		<>
			<AnimatePresence>
				<motion.div
					ref={ref}
					style={{
						// scale: scrollYProgress,
						// opacity: scrollYProgress
					}}
					className={style.layout}
				>
					<div className={style.container}>
						<h2>title block</h2>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam odio libero error. A maiores illum nisi excepturi necessitatibus at unde quod? Incidunt deserunt, blanditiis molestiae fugiat totam magni reiciendis dicta! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, nobis consequatur porro doloribus quia voluptas aspernatur animi voluptate blanditiis unde neque quisquam excepturi praesentium cum eveniet voluptatibus amet voluptatem corrupti.</p>
					</div>
				</motion.div>
			</AnimatePresence>
		</>
	)
}

export default TextCenter