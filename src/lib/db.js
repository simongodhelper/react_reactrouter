// firebase initialization
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//auth只有帳密登入
import { getAuth } from "firebase/auth";
//database有帳密和其他資料
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUWssvTFO8oHnxbAyQnG2nZl2U9Su4W-k",
  authDomain: "web-app-64c09.firebaseapp.com",
  projectId: "web-app-64c09",
  storageBucket: "web-app-64c09.appspot.com",
  messagingSenderId: "292945701660",
  appId: "1:292945701660:web:626996c70842323bc8a8d9",
  measurementId: "G-2EJMJZC2WF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const firebase = { auth, db };
export default firebase;
