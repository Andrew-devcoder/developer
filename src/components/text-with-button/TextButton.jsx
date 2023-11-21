import { motion } from "framer-motion"

import { MButton } from '../button/Button'
import style from './TextButton.module.scss'

const TextButton = () => {

	const testAnimation = {
		hidden: {
			x: -100,
			opacity: 0,
		},
		visible: custom => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.2 }
		}),
	}

	return (
		<>
			<motion.div
				className={style.item}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				<motion.h1
					custom={1}
					variants={testAnimation}
				>
					Mit uns zahlt das Internet</motion.h1>
				<motion.p
					custom={2}
					variants={testAnimation}
				>
					Millionen von Unternehmen aller Größenordnungen nutzen Stripe, um Zahlungen online und persönlich zu akzeptieren, Auszahlungen vorzunehmen, Finanzprozesse zu automatisieren und letztendlich ihren Umsatz zu steigern.
				</motion.p>
				<MButton
					text="other button"
					custom={3}
					variants={testAnimation}
				/>
			</motion.div>
		</>

	)
}

export default TextButton