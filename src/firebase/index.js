import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAeHmewqJjE_SRYc9UE6lXRW0Z51aHGHuo",
  authDomain: "myecommercereact-c94a3.firebaseapp.com",
  projectId: "myecommercereact-c94a3",
  storageBucket: "myecommercereact-c94a3.appspot.com",
  messagingSenderId: "112521069776",
  appId: "1:112521069776:web:9aa56878c9502793cb4ad5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export const getFirebase = () => app;


export const getFirestore = () =>  firebase.firestore(app);


