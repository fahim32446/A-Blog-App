// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXz6RhF3Bt1K-dpiYpM8zlDwNraz89xvM",
  authDomain: "blogapp-aafc2.firebaseapp.com",
  projectId: "blogapp-aafc2",
  storageBucket: "blogapp-aafc2.appspot.com",
  messagingSenderId: "508633338086",
  appId: "1:508633338086:web:109f05fc6069003e9f6b27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;