// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWrcbzJqbcILY_BqQdoNbrQqYWcDbZA-Y",
  authDomain: "netflix-gpt-8b47f.firebaseapp.com",
  projectId: "netflix-gpt-8b47f",
  storageBucket: "netflix-gpt-8b47f.appspot.com",
  messagingSenderId: "374284866535",
  appId: "1:374284866535:web:d556a5811d4de422086342",
  measurementId: "G-FW70T7WC6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();