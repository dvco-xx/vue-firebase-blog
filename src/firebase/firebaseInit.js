import firebase from "firebase/app";
import "firebase/firestore";

// add firebase sdk config to our app
const firebaseConfig = {
    apiKey: "AIzaSyAVR7_1H9sV-6ZYfJOpKKLwuOODN_uJJXE",
    authDomain: "fireblogsdo.firebaseapp.com",
    projectId: "fireblogsdo",
    storageBucket: "fireblogsdo.appspot.com",
    messagingSenderId: "153720187877",
    appId: "1:153720187877:web:58edccc71e5312cd9f9d0c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export { timestamp }
export default firebaseApp.firestore()