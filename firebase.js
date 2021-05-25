import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDI_NvsG1mSp5PsAHWrhN7LqSBugFTIL4w",
    authDomain: "clone-fad83.firebaseapp.com",
    projectId: "clone-fad83",
    storageBucket: "clone-fad83.appspot.com",
    messagingSenderId: "522197264954",
    appId: "1:522197264954:web:9085eb91dd89fae39ae303",
    measurementId: "G-SSYC9BVCJH"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore()

export { db }