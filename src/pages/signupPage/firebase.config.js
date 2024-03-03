
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0Ve6SYQmOs6iIf4f4cqOVJdCl2AD-TJY",
  authDomain: "shopandhave.firebaseapp.com",
  projectId: "shopandhave",
  storageBucket: "shopandhave.appspot.com",
  messagingSenderId: "139295447357",
  appId: "1:139295447357:web:7d4bd0e35fcd8ea47a0d54",
  measurementId: "G-1EE2V2P1JE"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)