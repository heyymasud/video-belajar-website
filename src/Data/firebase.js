// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "video-belajar-6dc0a.firebaseapp.com",
  projectId: "video-belajar-6dc0a",
  storageBucket: "video-belajar-6dc0a.appspot.com",
  messagingSenderId: "451789498140",
  appId: "1:451789498140:web:3d72bf1c39c98b33883cd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const db = getFirestore(app);

export {provider, auth, db}