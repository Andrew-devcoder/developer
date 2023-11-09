import Button from '../button/Button'
import Card from './Card/Card'
import style from './Cards.module.scss'


const Cards = () => {

	const styleItem1 = style.item1
	const styleItem2 = style.item2
	const styleItem3 = style.item3
	const styleItem4 = style.item4

	return (
		<>
			<div className={style.layout}>

				<div className={style.container}>
					<div className={style.item1}>
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