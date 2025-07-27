import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDQMVrIGa6rqpyylSLBmGUFkyzzB_XbJE",
  authDomain: "myecom-165c0.firebaseapp.com",
  projectId: "myecom-165c0",
  storageBucket: "myecom-165c0.firebasestorage.app",
  messagingSenderId: "214855637561",
  appId: "1:214855637561:web:fcd9d610f65c386d1d8be8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }