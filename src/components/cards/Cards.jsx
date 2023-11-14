import Card from './card/Card'
import style from './Cards.module.scss'


const Cards = () => {

	return (
		<>
			<div className={style.layout}>

				<div className={style.container}>
					<div className={style.item}>
						<h2>Low-Code- und No-Code-Optionen, damit Sie gleich loslegen können</h2>
						<p>
							Millionen von Unternehmen aller Größenordnungen nutzen Stripe, um Zahlungen online und persönlich zu akzeptieren, Auszahlungen vorzunehmen, Finanzprozesse zu automatisieren und letztendlich ihren Umsatz zu steigern.
						</p>
					</div>

					<Card />

				</div>
			</div>
		</>
	)
}

export default Cards