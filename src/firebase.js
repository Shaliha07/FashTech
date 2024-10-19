 // src/firebase.js

// Import the necessary Firebase functions from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDKMJYKdp1VsJTCGKhDu2CLe0SN-8OkYNU",
  authDomain: "fashtech-160f3.firebaseapp.com",
  databaseURL: "https://fashtech-160f3-default-rtdb.firebaseio.com",
  projectId: "fashtech-160f3",
  storageBucket: "fashtech-160f3.appspot.com",
  messagingSenderId: "622316838080",
  appId: "1:622316838080:web:ee40dd35e42af16df16125",
  measurementId: "G-DQSNNLV04E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and export it
export const database = getDatabase(app);
