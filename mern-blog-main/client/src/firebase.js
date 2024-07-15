// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-697f7.firebaseapp.com",
  projectId: "mern-blog-697f7",
  storageBucket: "mern-blog-697f7.appspot.com",
  messagingSenderId: "1066020792952",
  appId: "1:1066020792952:web:48749f0b63d1d05710db8d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);