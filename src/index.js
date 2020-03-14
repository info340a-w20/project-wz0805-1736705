import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { HashRouter } from "react-router-dom";
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAXaI2nvmqT3bCHfWLD5BCZHxIHt0HSIDI",
    authDomain: "wz0805-1736705-mood-recipe.firebaseapp.com",
    databaseURL: "https://wz0805-1736705-mood-recipe.firebaseio.com",
    projectId: "wz0805-1736705-mood-recipe",
    storageBucket: "wz0805-1736705-mood-recipe.appspot.com",
    messagingSenderId: "598619903147",
    appId: "1:598619903147:web:1fecaedf6456e36c8b53ee",
    measurementId: "G-1K91NDGQ3P"
};

firebase.initializeApp(firebaseConfig);
firebase.auth().useDeviceLanguage();


ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, document.getElementById('homebody'));
