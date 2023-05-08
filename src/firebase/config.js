import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCo5TbP_KT1KJV7QYduVe7R9-k0IMVFPWw",
    authDomain: "vue3-firebase-projeler-f232f.firebaseapp.com",
    projectId: "vue3-firebase-projeler-f232f",
    storageBucket: "vue3-firebase-projeler-f232f.appspot.com",
    messagingSenderId: "640079912506",
    appId: "1:640079912506:web:5d5f2d8d6e5ae259511f03"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { db, timestamp }
