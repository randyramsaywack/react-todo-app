import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // PASTE YOUR CONFIG HERE
});

const db = firebaseApp.firestore();

export { db };
