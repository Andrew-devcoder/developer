import style from './Intro.module.scss'

const Intro = () => {
	const styleSvg = `${style.item} ${style.itemSvg}`

	return (
		<>
			<div className={style.container}>
				<div className={style.item}>
					<h1>Mit uns zahlt das Internet</h1>
					<p>
						Millionen von Unternehmen aller Größenordnungen nutzen Stripe, um Zahlungen online und persönlich zu akzeptieren, Auszahlungen vorzunehmen, Finanzprozesse zu automatisieren und letztendlich ihren Umsatz zu steigern.
					</p>
					<button>button</button>
				</div>
				<div className={styleSvg}>
					<svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="2.586 66.379 250.828 124.639" width="160"><g fill="none" fillRule="evenodd"><path d="m102.907 106.981-66.897 40.034c-9.6 5.83-22.009 2.773-27.716-6.83-5.708-9.601-2.552-22.112 7.048-27.942l66.897-40.034c9.6-5.83 22.009-2.773 27.716 6.83s2.552 22.112-7.048 27.942z" fill="#ea4335" /><path d="m82.153 185.617-66.182-38.053c-9.742-5.4-13.214-17.764-7.754-27.614s17.784-13.457 27.527-8.057l66.182 38.054c9.743 5.4 13.214 17.763 7.754 27.613s-17.784 13.458-27.527 8.057z" fill="#4285f4" /><path d="m173.847 185.617 66.182-38.053c9.742-5.4 13.214-17.764 7.754-27.614s-17.784-13.457-27.527-8.057l-66.182 38.054c-9.743 5.4-13.214 17.763-7.754 27.613s17.784 13.458 27.527 8.057z" fill="#fbbc04" /><path d="m153.093 106.981 66.897 40.034c9.6 5.83 22.009 2.773 27.716-6.83 5.708-9.601 2.552-22.112-7.048-27.942l-66.897-40.034c-9.6-5.83-22.009-2.773-27.716 6.83s-2.552 22.112 7.048 27.942z" fill="#0f9d58" /></g></svg>
				</div>
			</div>
		</>
	)
}

export default Intro