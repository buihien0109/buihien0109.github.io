import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDD80wh3Lrzd9U5YQM7bbYaMuk9CuS8SnI",
  authDomain: "buihien-admin.firebaseapp.com",
  databaseURL: "https://buihien-admin.firebaseio.com",
  projectId: "buihien-admin",
  storageBucket: "buihien-admin.appspot.com",
  messagingSenderId: "572644608787",
  appId: "1:572644608787:web:782c1d473a26476ff5a8e6",
  measurementId: "G-YXTMX2K034"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const auth = firebase.auth();

export { firebase , auth, storage };
