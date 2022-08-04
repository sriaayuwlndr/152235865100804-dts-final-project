// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "finalproject-b99cd.firebaseapp.com",
  projectId: "finalproject-b99cd",
  storageBucket: "finalproject-b99cd.appspot.com",
  messagingSenderId: "959484530208",
  appId: "1:959484530208:web:32fa31158fe1d075afb645"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};