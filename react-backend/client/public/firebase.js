import firebase from 'firebase/app';
import auto from "firebase/auth";
import db from 'firebase/database'

// Import Admin SDK
var admin = require("firebase-admin");

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDLcs81oQQJ9GnAAOFNHW5oqA5pNC5IDWg",
    authDomain: "world-cup-64771.firebaseapp.com",
    databaseURL: "https://world-cup-64771.firebaseio.com",
    projectId: "world-cup-64771",
    storageBucket: "world-cup-64771.appspot.com",
    messagingSenderId: "678224116968"
  };
  firebase.initializeApp(config);
