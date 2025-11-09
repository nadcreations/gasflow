// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD73w541Bc2pWlAMCTIa9lRPoMWWoVfxYc",
  authDomain: "gasflow-eba6b.firebaseapp.com",
  projectId: "gasflow-eba6b",
  storageBucket: "gasflow-eba6b.firebasestorage.app",
  messagingSenderId: "94429255485",
  appId: "1:94429255485:web:f23e3ddf396410941e9754",
  measurementId: "G-FJQHHVR6KS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
