import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showmessage.js";  // Asegúrate de usar el nombre correcto de la función

const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = signupForm["signup-email"].value;
    const password = signupForm["signup-password"].value;
    console.log(email, password);

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);

        // Cierre del modal
        const signupModal = document.querySelector("#signupModal");
        const modal = bootstrap.Modal.getInstance(signupModal);
        modal.hide();

        showMessage("Bienvenido " + userCredentials.user.email, "success"); // Usamos "success" como tipo
    } catch (error) {
        if (error.code === "auth/email-already-in-use") {
            showMessage("Email ya registrado", "error");
        } else if (error.code === "auth/invalid-email") {
            showMessage("Email no válido", "error");
        } else if (error.code === "auth/weak-password") {
            showMessage("Contraseña débil", "error");
        } else {
            showMessage("Algo anda mal", "error");
        }
    }
});

