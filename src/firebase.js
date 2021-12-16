import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAO3laWkCNnZBASBDNgNu7jTLWGdHhQghk",
  authDomain: "twitter-5fda1.firebaseapp.com",
  projectId: "twitter-5fda1",
  storageBucket: "twitter-5fda1.appspot.com",
  messagingSenderId: "528102199822",
  appId: "1:528102199822:web:cbc8d2d5e621ece6bc625f",
  measurementId: "G-T6S3KGS3T7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
