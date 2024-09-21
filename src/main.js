import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { auth, database } from "./app/firebase.js";
import { logincheck } from "./app/loginCheck.js";
import {getDatabase} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js"
import "./app/signupForm.js";
import "./app/signinForm.js";
import "./app/logout.js";


let chart;
const db = getFirestore(); // Inicializar Firestore
// Ocultar el contenedor de la gráfica al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    
    document.querySelector('#chart-container').style.display = 'none';
});

// Escuchar cambios en el estado de autenticación del usuario
onAuthStateChanged(auth, async (user) => {
    console.log('User status changed', user);
    if (user) {
        console.log('Document is fully loaded and parsed');
    database.ref('data/');
    starCountRef.on('value', (snapshot) => {
      const data = snapshot.val();
     console.log(data);
    });
        document.querySelector('#chart-container').style.display = 'block';
        logincheck(user);

        // Cargar los tipos de medida y llenar el desplegable
        await obtenerTiposDeMedidas();

        // Escuchar cambios en la selección del usuario
        document.getElementById('medida-select').addEventListener('change', async (event) => {
            const selectedMedida = event.target.value;
            const datosFiltrados = await obtenerDatosPorMedida(selectedMedida);
            renderGrafica(datosFiltrados);
        });

    } else {
        document.querySelector('#chart-container').style.display = 'none';
        logincheck(null);
    }
    
});

// Función para obtener los tipos de medidas y llenar el desplegable
async function obtenerTiposDeMedidas() {
        

    const medidas = new Set();
    const q = query(collection(db, "tus_datos"));  // Ajusta el nombre de tu colección
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        medidas.add(data.medida);  // Agregar medidas únicas al Set
    });

    // Llenar el desplegable
    const dropdown = document.getElementById('medida-select');
    dropdown.innerHTML = ''; // Limpiar las opciones anteriores
    medidas.forEach(medida => {
        const option = document.createElement('option');
        option.value = medida;
        option.textContent = medida;
        dropdown.appendChild(option);
    });
}

// Función para obtener datos por medida desde Firestore
async function obtenerDatosPorMedida(medida) {
    const q = query(collection(db, "tus_datos"), where("medida", "==", medida));  // Ajusta el nombre de tu colección
    const querySnapshot = await getDocs(q);
    const datos = [];

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        datos.push({ momento: data.moment, valor: data.valor });
    });

    return datos;
}

// Función para renderizar la gráfica
function renderGrafica(datos) {
    const ctx = document.getElementById('myChart').getContext('2d');
    
    // Destruir la gráfica anterior si ya existe
    if (chart) {
        chart.destroy();
    }

    const tiempo = datos.map(d => d.momento);
    const valores = datos.map(d => d.valor);

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: tiempo,
            datasets: [{
                label: 'Valor',
                data: valores,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Tiempo'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Valor'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}
