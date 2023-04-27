import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import LoginUI from './components/LoginUI';
import firebase from 'firebase/compat/app';
import 'firebaseui/dist/firebaseui.css';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import './styles/index.css';

const firebaseConfig = {
	apiKey: 'AIzaSyBqfChKiDsIQBbVlcLA23LCe5ByM15yKz4',
	authDomain: 'gifygram-3e614.firebaseapp.com',
	projectId: 'gifygram-3e614',
	storageBucket: 'gifygram-3e614.appspot.com',
	messagingSenderId: '99657628351',
	appId: '1:99657628351:web:05c91d00bc8bfbd0a7a40a',
	measurementId: 'G-9M1JL9C746',
};

const uiConfig = {
	// signInSuccessUrl: process.env.PUBLIC_URL,
	signInOptions: [
		// Leave the lines as is for the providers you want to offer your users.
		{
			provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
			signInMethod:
				firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
		},
		{
			provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			customParameters: {
				prompt: 'select_account',
			},
		},
		// firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		// firebase.auth.EmailAuthProvider.PROVIDER_ID,
		// firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
	],
	// tosUrl and privacyPolicyUrl accept either url string or a callback
	// function.
	// Terms of service url/callback.
	// tosUrl: process.env.PUBLIC_URL,
	// Privacy policy url/callback.
	// privacyPolicyUrl: function () {
	// 	window.location.assign(process.env.PUBLIC_URL);
	// },
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

export { db, analytics, app, firebaseConfig, uiConfig };
