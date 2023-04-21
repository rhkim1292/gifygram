import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import firebase from "firebase/app";
import "./styles/index.css";

const firebaseConfig = {
  apiKey: "AIzaSyBqfChKiDsIQBbVlcLA23LCe5ByM15yKz4",
  authDomain: "gifygram-3e614.firebaseapp.com",
  projectId: "gifygram-3e614",
  storageBucket: "gifygram-3e614.appspot.com",
  messagingSenderId: "99657628351",
  appId: "1:99657628351:web:05c91d00bc8bfbd0a7a40a",
  measurementId: "G-9M1JL9C746",
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();
const db = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export {auth, db, analytics, app};