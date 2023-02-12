import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  //env 파일 보안요소
  apiKey:            `${process.env.REACT_APP_Fire}`,
  authDomain:        `${process.env.REACT_APP_authDomain}`,
  databaseURL:       `${process.env.REACT_APP_databaseURL}`,
  projectId:         `${process.env.REACT_APP_projectId}`,
  storageBucket:     `${process.env.REACT_APP_storageBucket}`,
  messagingSenderId: `${process.env.REACT_APP_messagingSenderId}`,
  appId:             `${process.env.REACT_APP_appId}`,
  measurementId:     `${process.env.REACT_APP_measurementId}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default firebaseConfig