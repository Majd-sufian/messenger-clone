import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCAdyuHPtnBFCqC3knDpkOSYv4a9hwt9b0",
    authDomain: "messenger-a589b.firebaseapp.com",
    databaseURL: "https://messenger-a589b.firebaseio.com",
    projectId: "messenger-a589b",
    storageBucket: "messenger-a589b.appspot.com",
    messagingSenderId: "279969456132",
    appId: "1:279969456132:web:d7c392a54f5236c62b9551",
    measurementId: "G-JV4NDX7NNQ"
})

const db = firebaseApp.firestore()

export default db