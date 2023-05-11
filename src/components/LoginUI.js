import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { useEffect } from "react";
import { uiConfig } from "../index.js";
import "../styles/LoginUI.css";
import gifygramLogo from "../images/gifygram-logo.png";

// Guide: https://github.com/firebase/firebaseui-web

const LoginUI = ({ userRef }) => {
	useEffect(() => {
		firebase.auth().signOut();
		userRef.current = null;
		const ui =
			firebaseui.auth.AuthUI.getInstance() ||
			new firebaseui.auth.AuthUI(firebase.auth());
		ui.start("#firebaseui-auth-container", uiConfig);
	}, [userRef]);

	return (
		<div className="login-page">
			<div className="loginui-container">
				<img
					className="gifygram-logo"
					src={gifygramLogo}
					alt="gifygram logo"
				/>
				<div id="firebaseui-auth-container"></div>
			</div>
		</div>
	);
};

export default LoginUI;
