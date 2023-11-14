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
			<div className={style.layout} id='contact'>
				<div className={style.container}>
					<div className={style.item}>
						<h2>
							contact us
						</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et animi quisquam odio, optio recusandae deleniti. Excepturi incidunt, rem dolorum eos nulla necessitatibus voluptate magni quibusdam, quae fugit sapiente modi voluptatem?
						</p>

					</div>
					<div className={style.item}>
						<div className={style.containerForm}>
							<form onSubmit={sendEmail}>
								{/* <label>Name</label> */}
								<input
									type="text"
									minLength="3"
									maxLength="25"
									placeholder='NAME'
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>
								{/* <label>Email</label> */}
								<input
									type="email"
									pattern=".+@example\.com"
									placeholder='EMAIL'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
								{/* <label>Message</label> */}
								<textarea
									cols='20'
									rows='5'
									maxLength="500"
									placeholder="Remember, be nice!"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
								/>
								<button type="submit" > send mail </button>
							</form>
						</div>
					</div>

				</div>


			</div>
		</>
	);
};

export default SendMail