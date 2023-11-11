import style from './Button.module.scss'

const Button = ({ text, myStyle }) => {
	const customStyle = `${style.button} ${myStyle}`
	return (
		<>
			<button className={customStyle} >
				{text}
			</button>
		</>
	)
}

export default Button