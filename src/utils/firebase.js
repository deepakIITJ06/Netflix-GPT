// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe0EG46F-h_00GSZR3BGjFuEIFCPvIACU",
  authDomain: "netflix-gpt-5be91.firebaseapp.com",
  projectId: "netflix-gpt-5be91",
  storageBucket: "netflix-gpt-5be91.appspot.com",
  messagingSenderId: "403677635659",
  appId: "1:403677635659:web:7c7107a03470c0c03159ce",
  measurementId: "G-94LC8RMR2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();