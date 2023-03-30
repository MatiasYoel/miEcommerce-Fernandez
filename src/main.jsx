import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCaM7GZeKI3QC5xhp00nl5hu9InTuIaQIM",
  authDomain: "ecommerce-tupilcha.firebaseapp.com",
  projectId: "ecommerce-tupilcha",
  storageBucket: "ecommerce-tupilcha.appspot.com",
  messagingSenderId: "995978141380",
  appId: "1:995978141380:web:238ab4d1ec91060c533391"
};

initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById("root")).render(<App />)
