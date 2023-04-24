import firebase from 'firebase/app';
import { auth, db, firebaseConfig } from '../index.js';
import { FirebaseAuthProvider, FirebaseUIAuth } from 'react-firebaseui';

const LoginUI = () => {
	const uiConfig = {
		signInFlow: 'popup',
		signInOptions: [auth.GoogleAuthProvider.PROVIDER_ID],
		callbacks: {
			signInSuccessWithAuthResult: (authResult) => {
				const user = authResult.user;
				const isNewUser = authResult.additionalUserInfo.isNewUser;
				console.log(user);
				if (isNewUser) {
					// Prompt the user to choose a username
					console.log('new user');
				}
				return false;
			},
		},
	};

	return (
		<FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
			<FirebaseUIAuth uiConfig={uiConfig} />
		</FirebaseAuthProvider>
	);
};

export default LoginUI;
