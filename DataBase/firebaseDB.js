import { firebase } from "@firebase/app";
import "firebase/firestore" 

const firebaseConfig = {
    apiKey: "AIzaSyADgF8jIZUvgxDA4bhtgO8DseTUdcEGRxo",
    authDomain: "chatapp-db690.firebaseapp.com",
    projectId: "chatapp-db690",
    storageBucket: "chatapp-db690.appspot.com",
    messagingSenderId: "127069459237",
    appId: "1:127069459237:web:ff81e3d69e96a8ca0880cc"
};
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;