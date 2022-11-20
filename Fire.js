const firebase = require('firebase/app');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDLcs81oQQJ9GnAAOFNHW5oqA5pNC5IDWg",
  authDomain: "world-cup-64771.firebaseapp.com",
  databaseURL: "https://world-cup-64771.firebaseio.com",
  projectId: "world-cup-64771",
  storageBucket: "world-cup-64771.appspot.com",
  messagingSenderId: "678224116968"
};

const fire = firebase.initializeApp(config);

module.exports = fire;