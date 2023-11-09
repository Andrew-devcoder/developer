import Button from '../button/Button'
import style from './TextButton.module.scss'

const TextButton = () => {
	return (
		<>
			<div className={style.item}>
				<h1>Mit uns zahlt das Internet</h1>
				<p>
					Millionen von Unternehmen aller Größenordnungen nutzen Stripe, um Zahlungen online und persönlich zu akzeptieren, Auszahlungen vorzunehmen, Finanzprozesse zu automatisieren und letztendlich ihren Umsatz zu steigern.
				</p>
				<Button text="other button" />
			</div>
		</>

	)
}

export default TextButton