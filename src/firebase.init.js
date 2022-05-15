// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8lj5ujT09LgiUPVeQyB73ncrzw6YIZlE",
  authDomain: "react-express-diagnostic-equip.firebaseapp.com",
  projectId: "react-express-diagnostic-equip",
  storageBucket: "react-express-diagnostic-equip.appspot.com",
  messagingSenderId: "451523169907",
  appId: "1:451523169907:web:6d3ade0a37bbb0cfda2406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

