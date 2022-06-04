import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

initializeApp({
  apiKey: "AIzaSyCRKthq9qTcKPC1yqbvqjgwKGYiQcI4b7E",
  authDomain: "react-bulaich.firebaseapp.com",
  projectId: "react-bulaich",
  storageBucket: "react-bulaich.appspot.com",
  messagingSenderId: "762663427025",
  appId: "1:762663427025:web:c52f48d17cbfbd29465ef0",
});

export const db = getFirestore();
