import style from './Button.module.scss'

const Button = ({ text }) => {
	return (
		<>
			<button className={style.button}>
				{text}
			</button>
		</>
	)
}

export default Button