import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmPn7bP1s_RMqEy34GFkVaRGgAfZrzzjo",
  authDomain: "chatweb-995e2.firebaseapp.com",
  projectId: "chatweb-995e2",
  storageBucket: "chatweb-995e2.appspot.com",
  messagingSenderId: "988971956802",
  appId: "1:988971956802:web:da89f77345ee900ccf4bdb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()