import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxlJVTazMcrpM5CKcUCrjmkftHyG__yBo",
    authDomain: "cryptoart-am.firebaseapp.com",
    projectId: "cryptoart-am",
    storageBucket: "cryptoart-am.appspot.com",
    messagingSenderId: "155656616153",
    appId: "1:155656616153:web:8bbb217e0f2b686b1aa6c8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestoreNFT = firebase.firestore(app)