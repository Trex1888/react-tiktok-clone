import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQ7I99OlyuBgZwwctNz98ZGvC2E-CwYu0",
  authDomain: "tiktok-dd5a5.firebaseapp.com",
  databaseURL: "https://tiktok-dd5a5.firebaseio.com",
  projectId: "tiktok-dd5a5",
  storageBucket: "tiktok-dd5a5.appspot.com",
  messagingSenderId: "990919947957",
  appId: "1:990919947957:web:15ed9c811bd6387ac5f0fc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
