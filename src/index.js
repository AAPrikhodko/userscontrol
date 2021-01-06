import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.min.css'

const firebaseConfig = {
    apiKey: "AIzaSyCRSBVjoULojjmMxWJa1XIYIT2C8df1z10",
    authDomain: "userscontrolfb.firebaseapp.com",
    databaseURL: "https://userscontrolfb-default-rtdb.firebaseio.com",
    projectId: "userscontrolfb",
    storageBucket: "userscontrolfb.appspot.com",
    messagingSenderId: "63876852579",
    appId: "1:63876852579:web:cc1ad23a4e9fcf10e94156",
    measurementId: "G-4Q6T20LK8X"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
