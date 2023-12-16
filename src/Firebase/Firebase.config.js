// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-2pI7C8jpMBKb8HKvj78JLnCHRohdI1g",
  authDomain: "job-portal-demo-550b4.firebaseapp.com",
  projectId: "job-portal-demo-550b4",
  storageBucket: "job-portal-demo-550b4.appspot.com",
  messagingSenderId: "602756273496",
  appId: "1:602756273496:web:b1bf10cc6005a1e06c412d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;