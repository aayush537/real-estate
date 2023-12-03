// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-524ca.firebaseapp.com",
  projectId: "real-estate-524ca",
  storageBucket: "real-estate-524ca.appspot.com",
  messagingSenderId: "823862007700",
  appId: "1:823862007700:web:fa17d12d94bbb2dac4e181"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);