// Importar las funciones necesarias desde Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";  // Importar Firestore
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js"; // Import Realtime Database functions

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyALs1PQJamLSJNpRrRHxOeLgMa2XVyQv1o",
  authDomain: "fir-veolia-e8109.firebaseapp.com",
  databaseURL: "https://fir-veolia-e8109-default-rtdb.firebaseio.com",
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
export const db = getFirestore(app); 
export const database = getDatabase(app); // Exportar Firestore

// Reference to the Realtime Database path
const starCountRef = ref(database, 'data/');

// Listening for value changes
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

console.log("Firebase initialized", database);