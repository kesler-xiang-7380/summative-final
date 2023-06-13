// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB51YZzEB0UnuuwI7PliN9RJV82uxihpa8",
  authDomain: "summative-49249.firebaseapp.com",
  projectId: "summative-49249",
  storageBucket: "summative-49249.appspot.com",
  messagingSenderId: "581504176099",
  appId: "1:581504176099:web:84a87a3ba1b4ac31869ad6",
};

// Initialize Firebase
const config = initializeApp(firebaseConfig);
export const auth = getAuth(config);
export const firestore = getFirestore(config);