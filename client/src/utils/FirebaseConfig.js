import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAsw4bmHbjFDXuJQ9gsaN_UH_1oryI0BkU",
  authDomain: "whatsapp-1144b.firebaseapp.com",
  projectId: "whatsapp-1144b",
  storageBucket: "whatsapp-1144b.appspot.com",
  messagingSenderId: "431229556293",
  appId: "1:431229556293:web:c0bf4e4629bffaede4f52c",
  measurementId: "G-2YG7NBYTP9"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);