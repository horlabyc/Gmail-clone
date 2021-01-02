import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC_-UDwSLg5_Fr31rsBBPWJVcXnf8hYMn8",
  authDomain: "clone-e8148.firebaseapp.com",
  projectId: "clone-e8148",
  storageBucket: "clone-e8148.appspot.com",
  messagingSenderId: "56346964966",
  appId: "1:56346964966:web:b0be8bdc7a048184009c27",
  measurementId: "G-3CT25SNXPW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };