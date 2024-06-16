// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAebIIO7o9FSsxM3p6zjU0QXdX8ZHVXTe4",
  authDomain: "taskmanager-d0b89.firebaseapp.com",
  projectId: "taskmanager-d0b89",
  storageBucket: "taskmanager-d0b89.appspot.com",
  messagingSenderId: "529761864529",
  appId: "1:529761864529:web:3bc8119bbcf40b98dbe170"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const firebase_db = getFirestore(firebase_app);

export {firebase_app,firebase_db};