// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi35qBneC6XKyG33uluArh4njQE-Y48_Q",
  authDomain: "vite-contact-154ec.firebaseapp.com",
  projectId: "vite-contact-154ec",
  storageBucket: "vite-contact-154ec.appspot.com",
  messagingSenderId: "383575379771",
  appId: "1:383575379771:web:78bb2f3ee34eda9021b11e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
