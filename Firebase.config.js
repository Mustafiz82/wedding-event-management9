// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADaOkDkfX1DKOeFk92vVpnZUcWBDmw9VE",
  authDomain: "wedding-hut-8caa8.firebaseapp.com",
  projectId: "wedding-hut-8caa8",
  storageBucket: "wedding-hut-8caa8.appspot.com",
  messagingSenderId: "434658749631",
  appId: "1:434658749631:web:30b4304912533f7f56aa0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app