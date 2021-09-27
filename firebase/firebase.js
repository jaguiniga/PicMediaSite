import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const Config = {
    apiKey: "AIzaSyB5k4AYDoYQ0Wxpy-T1y1xxS9a8klUFqh8",
    authDomain: "picmediasite-dev.firebaseapp.com",
    projectId: "picmediasite-dev",
    storageBucket: "picmediasite-dev.appspot.com",
    messagingSenderId: "95700240409",
    appId: "1:95700240409:web:a4452362557f8984fbc288",
    measurementId: "G-NPJX7BWV40"
  };

  // initilaize firebase
  
  firebase.initializeApp(Config)
  

  export const storage = firebase.storage();
export const timestamp1 = firebase.firestore.FieldValue.serverTimestamp();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
