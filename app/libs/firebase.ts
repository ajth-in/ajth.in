// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
if (!process.env.NEXT_PUBLIC_FIREBASE_CONFIG)
  throw new Error("Provide a valid firebase config");
// const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);

// Initialize Firebase

const app = initializeApp(JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG));

const db = getFirestore(app);
export const firestore = getFirestore();
export default db;
