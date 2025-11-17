import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFgqgG-Tq4gcDx77xwYA6t3kiqQGFkgNM",
  authDomain: "satturno-499f0.firebaseapp.com",
  projectId: "satturno-499f0",
  storageBucket: "satturno-499f0.firebasestorage.app",
  messagingSenderId: "723294674539",
  appId: "1:723294674539:web:d97adc535f584aa32e9b2e",
  measurementId: "G-8Y3GKXPPQ2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;