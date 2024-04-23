// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_2EIU626iySY9JlHhyEV0SYfih0mJ0Ts",
  authDomain: "mern-stack-6104b.firebaseapp.com",
  projectId: "mern-stack-6104b",
  storageBucket: "mern-stack-6104b.appspot.com",
  messagingSenderId: "607431877534",
  appId: "1:607431877534:web:d5aeca0eb7277ba6f56c8f",
  measurementId: "G-4LHXW4BMTE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);