// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDMSimslxPv6-CrXODzDeZM17rN-Mej5EA",
    authDomain: "hack-48b5c.firebaseapp.com",
    projectId: "hack-48b5c",
    storageBucket: "hack-48b5c.appspot.com",
    messagingSenderId: "358951209313",
    appId: "1:358951209313:web:d04daa8079bd7f4c2add20",
    measurementId: "G-ZM062CJGWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider;
// const analytics = getAnalytics(app);