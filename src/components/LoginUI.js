import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { useEffect } from 'react';
import { uiConfig } from '../index.js';
import { Route } from 'react-router-dom';

// Guide: https://github.com/firebase/firebaseui-web

const LoginUI = () => {
	useEffect(() => {
		console.log('rendered LoginUI');
		const ui =
			firebaseui.auth.AuthUI.getInstance() ||
			new firebaseui.auth.AuthUI(firebase.auth());
		ui.start('#firebaseui-auth-container', uiConfig);
	}, []);
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

	return <div id="firebaseui-auth-container"></div>;
};

export default LoginUI;
