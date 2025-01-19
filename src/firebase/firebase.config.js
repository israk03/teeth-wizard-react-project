// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvXmlxh6JDc0heVkM3JonmUChQh0qFILE",
  authDomain: "teeth-wizard-auth.firebaseapp.com",
  projectId: "teeth-wizard-auth",
  storageBucket: "teeth-wizard-auth.firebasestorage.app",
  messagingSenderId: "96166863850",
  appId: "1:96166863850:web:71f183cbe4eb00e9b00893",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
