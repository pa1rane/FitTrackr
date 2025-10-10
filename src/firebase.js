// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI9V-ftuNs09DVzaHbKF06xNZuWLq3X9A",
  authDomain: "fittrackr-4a7f3.firebaseapp.com",
  projectId: "fittrackr-4a7f3",
  storageBucket: "fittrackr-4a7f3.firebasestorage.app",
  messagingSenderId: "977288415343",
  appId: "1:977288415343:web:27452be7b0d56e8cdbe59a",
  measurementId: "G-PF0NWNJ706",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
