import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvHEhO2ghUYSpSUlIad_COGz2dFbQvIFY",
  authDomain: "desapmul.firebaseapp.com",
  projectId: "desapmul",
  storageBucket: "desapmul.appspot.com",
  messagingSenderId: "872601664308",
  appId: "1:872601664308:web:f85f9a0afb5b6a257a0361"
};

initializeApp(firebaseConfig)
export const database = getFirestore()