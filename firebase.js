// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvwaqFkHOk1X1xix1_FckZh41hhD7eusU",
  authDomain: "hspantryapp-209ae.firebaseapp.com",
  projectId: "hspantryapp-209ae",
  storageBucket: "hspantryapp-209ae.appspot.com",
  messagingSenderId: "373067789469",
  appId: "1:373067789469:web:1be1a89d4c50ad22dad074"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

export { firestore };