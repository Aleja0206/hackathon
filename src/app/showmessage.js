export function showMessage(message, type="success") {
    Toastify({
        text: message, // Usar el argumento 'message' correctamente
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // Corregido 'rigth' por 'right'
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: type === "success" ? "green" : "red" // Corregido 'succes' por 'success'
        },
        onClick: function(){} // Callback after click
    }).showToast();
}
