import firebase from "firebase/app";
import "firebase/firestore";

import firebaseConfig from "./config/firebase";

firebase.initializeApp(firebaseConfig);

const firebaseDb = firebase.firestore();

export default firebaseDb;
