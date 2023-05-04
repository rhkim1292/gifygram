import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import LoginUI from './components/LoginUI';
import firebase from 'firebase/compat/app';
import 'firebaseui/dist/firebaseui.css';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';

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
	signInFlow: 'popup',
	signInSuccessUrl: '/gifygram/',
	signInOptions: [
		// {
		// 	provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
		// 	signInMethod:
		// 		firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
		// },
		{
			provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			customParameters: {
				prompt: 'select_account',
			},
		},
	],
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

export { db, analytics, app, firebaseConfig, uiConfig };
