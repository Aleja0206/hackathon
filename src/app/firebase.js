// Importar las funciones necesarias desde Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";  // Importar Firestore

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyALs1PQJamLSJNpRrRHxOeLgMa2XVyQv1o",
  authDomain: "fir-veolia-e8109.firebaseapp.com",
  projectId: "fir-veolia-e8109",
  storageBucket: "fir-veolia-e8109.appspot.com",
  messagingSenderId: "691683155682",
  appId: "1:691683155682:web:2a2985138abfaf1387c8bb",
  measurementId: "G-NZVBHMSG0M"
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);


// Inicializar Auth y Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);  // Exportar Firestore
