// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaplcjU6TUecER8gp1LHb71Yq5UGBFSxs",
  authDomain: "sdgform.firebaseapp.com",
  projectId: "sdgform",
  storageBucket: "sdgform.appspot.com",
  messagingSenderId: "2566002629",
  appId: "1:2566002629:web:c13dea69fe98a385f95dac"
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
