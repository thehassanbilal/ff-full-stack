// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBrtWcmWPPnc1gu37jr224H_nu6je7w_Q",
  authDomain: "ff-media.firebaseapp.com",
  projectId: "ff-media",
  storageBucket: "ff-media.appspot.com",
  messagingSenderId: "336939724934",
  appId: "1:336939724934:web:acc6a03e284324401be107",
  measurementId: "G-PQM2FHS7R3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);