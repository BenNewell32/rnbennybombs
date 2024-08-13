// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY1M17hwCR65cJ0tbO_9ASq6XAZknpXhM",
  authDomain: "bennybombs-e58cd.firebaseapp.com",
  projectId: "bennybombs-e58cd",
  storageBucket: "bennybombs-e58cd.appspot.com",
  messagingSenderId: "445360966591",
  appId: "1:445360966591:web:51145c1e0581a5a8292f0a",
  measurementId: "G-QBY5CS2D5S"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);