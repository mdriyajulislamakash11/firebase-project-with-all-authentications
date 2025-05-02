// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFJ7auO86g-LWZYadIE-FOQtP1vU0Nvzg",
  authDomain: "farebase-auth-projects.firebaseapp.com",
  projectId: "farebase-auth-projects",
  storageBucket: "farebase-auth-projects.firebasestorage.app",
  messagingSenderId: "236442279773",
  appId: "1:236442279773:web:43aa69651b5ea6795692b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);