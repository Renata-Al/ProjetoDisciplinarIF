
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

 const firebaseConfig = {
   apiKey: "AIzaSyAwpeo3ZqgYbbs-AMtjONMfpD7H9VVTv8U",
   authDomain: "web3anoifam.firebaseapp.com",
   projectId: "web3anoifam",
   storageBucket: "web3anoifam.firebasestorage.app",
   messagingSenderId: "1065777033730",
   appId: "1:1065777033730:web:64c7e21ea4039b844a2d1b"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app); 

export {auth}