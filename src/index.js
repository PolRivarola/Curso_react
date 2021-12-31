import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf_uFd0nW6H_VTJPJXYI5sritlx1wHEZU",
  authDomain: "cinelife-25811.firebaseapp.com",
  projectId: "cinelife-25811",
  storageBucket: "cinelife-25811.appspot.com",
  messagingSenderId: "807770480873",
  appId: "1:807770480873:web:d5861210f8e7213fa69078",
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.react(elemento de react, elemnto donde se va a renderizar)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
