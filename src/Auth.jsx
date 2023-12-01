import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, signOut } from "firebase/auth"
import { app, googleAuthProvider } from "./firebase"

import Button from "./components/button/Button"

export const AuthProvider = () => {

	const auth = getAuth(app)
	const [user, setUser] = useState(auth.currentUser)

	useEffect(() => {
		const unsub = auth.onAuthStateChanged((mbUser) => {
			if (mbUser != null) {
				return setUser(mbUser)
			}

			// signInWithPopup(auth, googleAuthProvider).then(credentials =>
			// 	setUser(credentials.user)
			// ).catch((e) => {
			// 	console.error(e)
			// })
		})

		return unsub
	}, [auth])

	const handleSignInWithGoogle = () => {
		signInWithPopup(auth, googleAuthProvider)
			.then((credentials) => setUser(credentials.user))
			.catch((error) => {
				console.error(error);
			});
	};

	const handleSignOut = () => {
		signOut(auth)
			.then(() => setUser(null))
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		user != null ?
			<>
				<a href="#">
					{user.displayName}
				</a>
				<Button text='Sign Out' onClick={handleSignOut} />
			</>
			:
			<>
				<Button text='Sign in with Google' onClick={handleSignOut} />
			</>
	)
}