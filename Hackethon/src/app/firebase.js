 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyALs1PQJamLSJNpRrRHxOeLgMa2XVyQv1o",
   authDomain: "fir-veolia-e8109.firebaseapp.com",
   projectId: "fir-veolia-e8109",
   storageBucket: "fir-veolia-e8109.appspot.com",
   messagingSenderId: "691683155682",
   appId: "1:691683155682:web:2a2985138abfaf1387c8bb",
   measurementId: "G-NZVBHMSG0M"
 };

 // Initialize Firebase
export const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
export const auth =getAuth(app)