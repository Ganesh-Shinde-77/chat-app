import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDZhGUfShd_crQplTHq4e-ZAgipqVDR7Eg",
  authDomain: "chatapp-43bfe.firebaseapp.com",
  projectId: "chatapp-43bfe",
  storageBucket: "chatapp-43bfe.appspot.com",
  messagingSenderId: "778634348298",
  appId: "1:778634348298:web:a122f6296d27e9219d5cf3",
  measurementId: "G-GPQ0SC5K24"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);