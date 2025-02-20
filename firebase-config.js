// Import Firebase SDK
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your Firebase config (get this from Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyAb7EcZ98mRD-VuGzyQZACBrcGPvR89iS0",
    authDomain: "webassingment-12663.firebaseapp.com",
    projectId: "webassingment-12663",
    storageBucket: "webassingment-12663.firebasestorage.app",
    messagingSenderId: "253077413212",
    appId: "1:253077413212:web:ab490f8c61a7547083b599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
