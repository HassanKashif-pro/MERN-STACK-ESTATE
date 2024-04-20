// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-stack-6104b.firebaseapp.com",
  projectId: "mern-stack-6104b",
  storageBucket: "mern-stack-6104b.appspot.com",
  messagingSenderId: "607431877534",
  appId: "1:607431877534:web:01473ff39959c52bf56c8f",
  measurementId: "G-WLQCXM9H01"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

