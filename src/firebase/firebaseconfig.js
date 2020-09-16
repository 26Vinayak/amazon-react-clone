import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAzy1i5hF5gGQETglJfJOCDEdQdi7gCkIM",
        authDomain: "clone-6fded.firebaseapp.com",
        databaseURL: "https://clone-6fded.firebaseio.com",
        projectId: "clone-6fded",
        storageBucket: "clone-6fded.appspot.com",
        messagingSenderId: "1083428394805",
        appId: "1:1083428394805:web:f44c31aa841b8aae6b1e7c",
        measurementId: "G-JRHEPLDCZ5"
});



const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth };