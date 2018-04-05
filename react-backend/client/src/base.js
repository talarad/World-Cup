import Rebase from 're-base';
import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDLcs81oQQJ9GnAAOFNHW5oqA5pNC5IDWg",
    authDomain: "world-cup-64771.firebaseapp.com",
    databaseURL: "https://world-cup-64771.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }; 
export default base;