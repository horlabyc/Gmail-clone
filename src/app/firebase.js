import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC8UT6WagZrVswIUou55HEmzTLsExMxr1U",
  authDomain: "clone-8f592.firebaseapp.com",
  projectId: "clone-8f592",
  storageBucket: "clone-8f592.appspot.com",
  messagingSenderId: "313284843613",
  appId: "1:313284843613:web:7fa68a6275b465f2f655b4",
  measurementId: "G-R3609GM4QS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };