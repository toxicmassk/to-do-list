// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCegHPbn57nqnAfb9cWrb-UrXYHorU0IJw",
  authDomain: "to-do-list-95d5a.firebaseapp.com",
  projectId: "to-do-list-95d5a",
  storageBucket: "to-do-list-95d5a.appspot.com",
  messagingSenderId: "160081054710",
  appId: "1:160081054710:web:04f7958126984bc7db15d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
