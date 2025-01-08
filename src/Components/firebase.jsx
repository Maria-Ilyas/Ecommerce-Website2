// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoKYZgc0l86-HfSJWzGLDka33vck3MGlM",
  authDomain: "login-7f0d3.firebaseapp.com",
  projectId: "login-7f0d3",
  storageBucket: "login-7f0d3.firebasestorage.app",
  messagingSenderId: "473202580729",
  appId: "1:473202580729:web:cdcfc5e68fc131f5b59628"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;