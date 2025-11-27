// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "zippy-food-delivery-a9b4a.firebaseapp.com",
    projectId: "zippy-food-delivery-a9b4a",
    storageBucket: "zippy-food-delivery-a9b4a.firebasestorage.app",
    messagingSenderId: "161749517131",
    appId: "1:161749517131:web:64dc787feafa087498dece"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { app, auth }



