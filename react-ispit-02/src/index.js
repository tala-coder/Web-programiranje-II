import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { initializeApp } from "firebase/app";  

const firebaseConfig = {
  apiKey: "AIzaSyDx9mQro7sIyh9JiUUaSCWJYcLj3lYsPt4",
  authDomain: "vjezbe-6.firebaseapp.com",
  projectId: "vjezbe-6",
  storageBucket: "vjezbe-6.appspot.com",
  messagingSenderId: "1021086850860",
  appId: "1:1021086850860:web:a67b05ee1a3d5e4e8c9689",
  measurementId: "G-7L9BYCS619"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export{app}
