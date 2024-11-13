// Do not store config on the client side

import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPssEa4ctW0K8FPdAgoUR44k3lsU5bEL8",
  authDomain: "somple-firebase.firebaseapp.com",
  projectId: "somple-firebase",
  storageBucket: "somple-firebase.firebasestorage.app",
  messagingSenderId: "870513571647",
  appId: "1:870513571647:web:975ee90f6d49f459ad858a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;