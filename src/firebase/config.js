// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCePYvf9PprnQGU_-oJfnCtXmJJz1D8amg",
  authDomain: "react-49905-55ec7.firebaseapp.com",
  projectId: "react-49905-55ec7",
  storageBucket: "react-49905-55ec7.appspot.com",
  messagingSenderId: "917926788857",
  appId: "1:917926788857:web:842fcbeb7e8f6ff69b6c28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const initFirebase = ()=> app