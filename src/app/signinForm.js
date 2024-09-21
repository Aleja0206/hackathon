import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import{ auth } from "./firebase.js"
import { showMessage } from "./showmessage.js"; 

const signInForm=document.querySelector("#login-form")

 signInForm.addEventListener("submit", async e =>{
   e.preventDefault()
   
   const email=signInForm["login-email"].value
   const password=signInForm["login-password"].value
   try{
    const credentials=await signInWithEmailAndPassword(auth, email, password)
    console.log (credentials)
    const modal= bootstrap.Modal.getInstance(document.querySelector("#signinModal"))
    modal.hide()
    showMessage("Bienvenido "+credentials.user.email )
   }catch (error){
    if(error.code==="auth/wrong-password"){
        showMessage ("Contraseña Incorrecta","error")
    }else if(error.code==="auth/user-not-found"){
        showMessage ("Usuario no encontrado","error")
   } else {
    showMessage(error.message, "error")
   }
}
 })