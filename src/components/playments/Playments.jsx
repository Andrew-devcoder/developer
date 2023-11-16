import style from './Playments.module.scss'
import { BiLabel, BiRightArrowAlt } from 'react-icons/bi'
import { BsFillFileCodeFill } from "react-icons/bs";

import Button from '../button/Button'

const Playments = () => {

	const itemBig = `${style.item} ${style.itemBig}`

	return (
		<>
			<div className={style.section}>

				<div className={style.layout}>
					<div className={style.container}>
						<div className={itemBig}>
							<h4>Startklar?</h4>
							<p>
								Entdecken Sie Stripe Payments oder erstellen Sie direkt ein Konto und beginnen Sie mit dem Akzeptieren von Zahlungen. Unser Sales-Team berät Sie gerne und gestaltet für Sie ein individuelles Angebot, das genau auf Ihr Unternehmen abgestimmt ist.
							</p>
							<div className={style.containerBtn}>
								<Button text="btn text" />
								<a className={style.link} href="#">link
									<BiRightArrowAlt />
								</a>
							</div>
						</div>
						<div className={style.item}>
							<BsFillFileCodeFill className={style.icon} />
							<h5>Absolute Preistransparenz</h5>
							<p>
								Preisgestaltung pro Transaktion ohne versteckte Gebühren
							</p>
						</div>
						<div className={style.item}>
							<BiLabel className={style.icon} />
							<h5>Schnelle Integration</h5>
							<p>
								Mit Stripe starten in weniger als 10 Minuten
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Playments
