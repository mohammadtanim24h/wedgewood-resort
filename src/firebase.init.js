import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6u9TcJbYU8O3tco5wmGojXfrPM7uLrJ4",
  authDomain: "wedgewood-resort.firebaseapp.com",
  projectId: "wedgewood-resort",
  storageBucket: "wedgewood-resort.appspot.com",
  messagingSenderId: "929317659062",
  appId: "1:929317659062:web:d5c2efc997dcc5150ea117"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;