// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI-jdkYwiBvUpCK883NmcyLL8cGUxzr5s",
  authDomain: "pf-react-js-c4c56.firebaseapp.com",
  projectId: "pf-react-js-c4c56",
  storageBucket: "pf-react-js-c4c56.appspot.com",
  messagingSenderId: "41379779714",
  appId: "1:41379779714:web:28674fc982d20bf804109b",
  measurementId: "G-VPHH04839X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

