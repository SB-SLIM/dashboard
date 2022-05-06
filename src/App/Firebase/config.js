// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCiJvn8a5ky6lVys_e-lmqHKlidLx46NBQ",
  authDomain: "dashboard-182d9.firebaseapp.com",
  projectId: "dashboard-182d9",
  storageBucket: "dashboard-182d9.appspot.com",
  messagingSenderId: "417753270487",
  appId: "1:417753270487:web:3236360cf19b05839f8892",
  measurementId: "G-2Q4Q4ZQW9S",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
