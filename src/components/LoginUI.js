import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { useEffect } from 'react';
import { uiConfig } from '../index.js';

// Guide: https://github.com/firebase/firebaseui-web

const LoginUI = ({ userRef }) => {
	useEffect(() => {
		firebase.auth().signOut();
		userRef.current = null;
		const ui =
			firebaseui.auth.AuthUI.getInstance() ||
			new firebaseui.auth.AuthUI(firebase.auth());
		ui.start('#firebaseui-auth-container', uiConfig);
	}, [userRef]);

	return (
		<div>
			<div id="firebaseui-auth-container"></div>
		</div>
	);
};

export default LoginUI;
