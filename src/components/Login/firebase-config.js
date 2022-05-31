import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcX3eSh3wJgY0W7p0ksmdzEkDvxoY3mSM",
  authDomain: "bellaco-db058.firebaseapp.com",
  databaseURL: "https://bellaco-db058-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bellaco-db058",
  storageBucket: "bellaco-db058.appspot.com",
  messagingSenderId: "455828681452",
  appId: "1:455828681452:web:626901e643af4bd6592bc9",
  measurementId: "G-TN5FTRD39F"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);