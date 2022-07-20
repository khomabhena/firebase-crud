import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAB6HufYuSSAyNfthMNJnpG-o08C8iRhGc",
  authDomain: "fir-crud-b4930.firebaseapp.com",
  projectId: "fir-crud-b4930",
  storageBucket: "fir-crud-b4930.appspot.com",
  messagingSenderId: "170861167324",
  appId: "1:170861167324:web:a2b3babf0c1efd1a48aa19",
  measurementId: "G-8CJ1V00NQ7"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();