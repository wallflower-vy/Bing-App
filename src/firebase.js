// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyichomiflEPYeWS_tYXLZCBEA3DV_Siw",
  authDomain: "bing-9cf03.firebaseapp.com",
  projectId: "bing-9cf03",
  storageBucket: "bing-9cf03.appspot.com",
  messagingSenderId: "872560115918",
  appId: "1:872560115918:web:9f16f714f82d03981c109f"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
