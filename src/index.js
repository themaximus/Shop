import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import Suka from './Components/Router';





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX0kxnwbqrRQmApsAUbUuhrQoI9-encCA",
  authDomain: "pijama-shop-2022.firebaseapp.com",
  projectId: "pijama-shop-2022",
  storageBucket: "pijama-shop-2022.appspot.com",
  messagingSenderId: "1006092180191",
  appId: "1:1006092180191:web:3c92b869337ae1c244676a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




ReactDOM.render(
  
  <React.StrictMode>
 
    <Suka />
    
  </React.StrictMode>,
  document.getElementById('root')
 
);









// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
