// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfLUH9Eqip9vhsptmOqxEMOrPJgnksPFU",
  authDomain: "netflixgpt-912de.firebaseapp.com",
  projectId: "netflixgpt-912de",
  storageBucket: "netflixgpt-912de.firebasestorage.app",
  messagingSenderId: "830096527526",
  appId: "1:830096527526:web:d41398debf6f725556a467",
  measurementId: "G-1Y36VGLQZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();