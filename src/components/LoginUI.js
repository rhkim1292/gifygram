import firebase from 'firebase/compat/app';
import { auth, firebaseConfig } from '../index.js';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

// Guide: https://github.com/firebase/firebaseui-web
const LoginUI = () => {
	const uiConfig = {
		signInSuccessUrl: process.env.PUBLIC_URL,
		signInOptions: [
			// Leave the lines as is for the providers you want to offer your users.
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.FacebookAuthProvider.PROVIDER_ID,
			firebase.auth.TwitterAuthProvider.PROVIDER_ID,
			firebase.auth.GithubAuthProvider.PROVIDER_ID,
			firebase.auth.EmailAuthProvider.PROVIDER_ID,
			firebase.auth.PhoneAuthProvider.PROVIDER_ID,
			firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
		],
		// tosUrl and privacyPolicyUrl accept either url string or a callback
		// function.
		// Terms of service url/callback.
		tosUrl: '<your-tos-url>',
		// Privacy policy url/callback.
		privacyPolicyUrl: function () {
			window.location.assign('<your-privacy-policy-url>');
		},
	};
	// const uiConfig = {
	// 	signInFlow: 'popup',
	// 	signInOptions: [auth.GoogleAuthProvider.PROVIDER_ID],
	// 	callbacks: {
	// 		signInSuccessWithAuthResult: (authResult) => {
	// 			const user = authResult.user;
	// 			const isNewUser = authResult.additionalUserInfo.isNewUser;
	// 			console.log(user);
	// 			if (isNewUser) {
	// 				// Prompt the user to choose a username
	// 				console.log('new user');
	// 			}
	// 			return false;
	// 		},
	// 	},
	// };

	return (
		<FirebaseAuth firebase={firebase} {...firebaseConfig}>
			<StyledFirebaseAuth uiConfig={uiConfig} />
		</FirebaseAuth>
	);
};

export default LoginUI;
