import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion"

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from "../../components/firebase/firebase"

import style from './SendMail.module.scss'

const SendMail = () => {

	const auth = getAuth(app)
	const [user, setUser] = useState(auth)
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			return setUser(user);
		});

		return () => unsubscribe();
	}, [auth]);

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

	const animation = {
		hidden: custom => ({
			x: custom,
			opacity: 0,
		}),
		visible: {
			x: 0,
			opacity: 1,
			transition: { delay: 0.4 }
		},
	}

	return (
		<>
			<div className={style.layout} id='contact'>
				<motion.div
					className={style.container}
					initial="hidden"
					whileInView="visible"
					viewport={{ amout: 0.8, once: true }}

				>
					<div className={style.item}>
						<motion.h2
							variants={animation}
							custom={-100}
						>
							contact us
						</motion.h2>
						<motion.p
							variants={animation}
							custom={-100}
						>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et animi quisquam odio, optio recusandae deleniti. Excepturi incidunt, rem dolorum eos nulla necessitatibus voluptate magni quibusdam, quae fugit sapiente modi voluptatem?
						</motion.p>

					</div>
					<div className={style.item}>
						<motion.div
							className={style.containerForm}
							onSubmit={sendEmail}
							variants={animation}
							custom={100}
						>
							<form>
								{/* <label>Name</label> */}
								<input
									type="text"
									minLength="3"
									maxLength="25"
									placeholder='NAME'
									// value={name}
									value={user?.displayName || name}
									onChange={(e) => setName(e.target.value)}
									required
								/>
								{/* <label>Email</label> */}
								<input
									type="email"
									pattern=".+@example\.com"
									placeholder='EMAIL'
									// value={email}
									value={user?.email || email}
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
						</motion.div>
					</div>

				</motion.div>


			</div>
		</>
	);
};

export default SendMail