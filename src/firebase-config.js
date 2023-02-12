// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    
  apiKey: "AIzaSyB2bIdPQJoha22QneQW4TfEUfpb49pNzH4",
  authDomain: "chatting-5d71a.firebaseapp.com",
  databaseURL: "https://chatting-5d71a-default-rtdb.firebaseio.com",
  projectId: "chatting-5d71a",
  storageBucket: "chatting-5d71a.appspot.com",
  messagingSenderId: "214039118946",
  appId: "1:214039118946:web:0e169f156edf2a4a0efd3b",
  measurementId: "G-44SC7ZNQ5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);