// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl1k42_raOZuLIuexXbHoc-oV0nORdMb0",
  authDomain: "info340-group4.firebaseapp.com",
  databaseURL: "https://info340-group4-default-rtdb.firebaseio.com",
  projectId: "info340-group4",
  storageBucket: "info340-group4.appspot.com",
  messagingSenderId: "396468489371",
  appId: "1:396468489371:web:827b38bacf1e3abd60ca3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

