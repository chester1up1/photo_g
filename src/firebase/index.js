import * as firebase from 'firebase';
import 'firebase/storage'
var firebaseConfig = {
    apiKey: "AIzaSyA_-TAEYl1EafZNSO1P_UC-QxukIzQ-T2M",
    authDomain: "photog-4b317.firebaseapp.com",
    databaseURL: "https://photog-4b317.firebaseio.com",
    projectId: "photog-4b317",
    storageBucket: "photog-4b317.appspot.com",
    messagingSenderId: "436561198921",
    appId: "1:436561198921:web:b20117b57f23074c2fa498",
    measurementId: "G-QY12RRY1PV"
  };
firebase.initializeApp(firebaseConfig);
export const storage =firebase.storage();
export const database = firebase.firestore();