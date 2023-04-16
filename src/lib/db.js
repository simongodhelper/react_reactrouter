// firebase initialization
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8oLQYl3P850tKiB7YTBnNPSsI0YqpIZw",
  authDomain: "reactrouter-dd17f.firebaseapp.com",
  projectId: "reactrouter-dd17f",
  storageBucket: "reactrouter-dd17f.appspot.com",
  messagingSenderId: "441812624481",
  appId: "1:441812624481:web:fd1335665fadc63c02f620",
  measurementId: "G-91S79FH8ZX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
