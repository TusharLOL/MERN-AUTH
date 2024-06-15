import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-bfe7a.firebaseapp.com",
  projectId: "mern-auth-bfe7a",
  storageBucket: "mern-auth-bfe7a.appspot.com",
  messagingSenderId: "888324914130",
  appId: "1:888324914130:web:4eee5c1d4abab681bc660b"
};

export const app = initializeApp(firebaseConfig);