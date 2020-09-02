import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBE4MvxWLMIAApKJTEqT_ZpXHRa3A1kj50",
  authDomain: "wom-venta-de-planes.firebaseapp.com",
  databaseURL: "https://wom-venta-de-planes.firebaseio.com",
  projectId: "wom-venta-de-planes",
  storageBucket: "wom-venta-de-planes.appspot.com",
  messagingSenderId: "343519676009",
  appId: "1:343519676009:web:492dc3db677bd2d93f44f8",
  measurementId: "G-C2L75XKKLB"
});

const db = firebaseApp.firestore();

export default  db ;