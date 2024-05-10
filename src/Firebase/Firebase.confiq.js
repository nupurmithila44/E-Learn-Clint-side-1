// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6ABXKW5UHvc-Kc5vCMX0ONS2Jw2bypaw",
  authDomain: "e-learn-online.firebaseapp.com",
  projectId: "e-learn-online",
  storageBucket: "e-learn-online.appspot.com",
  messagingSenderId: "1040116142552",
  appId: "1:1040116142552:web:31af0617b7a28160fd62ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
