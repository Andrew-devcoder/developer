import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import style from './SendMail.module.scss'

const SendMail = () => {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const sendEmail = (e) => {
		e.preventDefault();

		const YOUR_SERVICE_ID = import.meta.env.VITE_YOUR_SERVICE_ID
		const YOUR_TEMPLATE_ID = import.meta.env.VITE_YOUR_TEMPLATE_ID
		const YOUR_PUBLIC_KEY = import.meta.env.VITE_YOUR_PUBLIC_KEY

		const templateParams = {
			from_name: name,
			from_email: email,
			to_name: 'name website',
			message: message
		}

		emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_PUBLIC_KEY)
			.then((response) => {
				console.log('email sent successfully', response);
				setName('');
				setEmail('');
				setMessage('');

			}).catch((error) => {
				console.error('error message', error);
			});
	};

	return (
		<>
			<div className={style.layout}>

				<form onSubmit={sendEmail}>
					<label>Name</label>
					<input
						type="text"
						placeholder='fucking name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<label>Email</label>
					<input
						type="email"
						placeholder='fucking email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label>Message</label>
					<textarea
						cols='30'
						rows='10'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button type="submit" > send mail </button>
				</form>
			</div>
		</>
	);
};

export default SendMail