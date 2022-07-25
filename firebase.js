// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore/lite'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx7WiMJmOgJeV3boraiGgoHxyT0wx32co",
  authDomain: "instagram-a5204.firebaseapp.com",
  projectId: "instagram-a5204",
  storageBucket: "instagram-a5204.appspot.com",
  messagingSenderId: "637885638706",
  appId: "1:637885638706:web:a499c9101acf520da4f42b",
  measurementId: "G-CRRW8Z6LMW"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const authentication = getAuth(app)
export  {db,authentication};