// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1SnXzvDwE82bPAJ_OW_eJTjgw4FGUqyc",
  authDomain: "simple-dragon-news.firebaseapp.com",
  projectId: "simple-dragon-news",
  storageBucket: "simple-dragon-news.firebasestorage.app",
  messagingSenderId: "1096077242452",
  appId: "1:1096077242452:web:956a0959b4f61b600efdc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);