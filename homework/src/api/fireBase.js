import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// import { getConversationApi } from "./conversations";

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

export const fireBaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(fireBaseApp);
export const auth = getAuth(fireBaseApp);
export const database = getDatabase(fireBaseApp);