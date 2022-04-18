import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { createConversationApi} from "./conversations";

const firebaseConfig = {
  apiKey: "AIzaSyBbn77cEZhAT1tiz-tAocG6FNbbcOh5-lw",
  authDomain: "gb-hw9.firebaseapp.com",
  databaseURL: "https://gb-hw9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-hw9",
  storageBucket: "gb-hw9.appspot.com",
  messagingSenderId: "269714949406",
  appId: "1:269714949406:web:0af4af73cdb0ef0360f50f",
  measurementId: "G-DCX9V7B155"
};

export const frbase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(frbase);
export const auth = getAuth(frbase);
export const database = getDatabase(frbase);

setTimeout(() => {
  createConversationApi('room1')
  createConversationApi('room2')
  createConversationApi('room3')
  console.log('end')
}, 2000)