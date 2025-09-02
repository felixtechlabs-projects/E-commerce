// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_9AwW_uMiRT_ss5HQU0xi8tezj6dbVc4",
  authDomain: "wd3-ecommerce.firebaseapp.com",
  projectId: "wd3-ecommerce",
  storageBucket: "wd3-ecommerce.firebasestorage.app",
  messagingSenderId: "968354103348",
  appId: "1:968354103348:web:96b1c0d0b38d09f1524a61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
export default app;