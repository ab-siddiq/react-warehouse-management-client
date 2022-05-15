// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUEQEXZO9v3LLl-vGOYUjvDhRMVaSt1bw",
  authDomain: "react-mongodb-diagnostic-equip.firebaseapp.com",
  projectId: "react-mongodb-diagnostic-equip",
  storageBucket: "react-mongodb-diagnostic-equip.appspot.com",
  messagingSenderId: "475357891344",
  appId: "1:475357891344:web:8a2988229783d4d8e33395"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

