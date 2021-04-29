import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC_1Q_Z7C7UqgEeJiek1wgaMTvbNzvXikg",
    authDomain: "test-task-3eb2e.firebaseapp.com",
    databaseURL: "https://test-task-3eb2e-default-rtdb.firebaseio.com",
    projectId: "test-task-3eb2e",
    storageBucket: "test-task-3eb2e.appspot.com",
    messagingSenderId: "749745960273",
    appId: "1:749745960273:web:9e54bff100ecbce0808f70",
    measurementId: "G-5Q6XCYFBJ1"
}
firebase.initializeApp(firebaseConfig); //инициализиуермя в бд



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
