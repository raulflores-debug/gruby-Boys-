console.log("JavaScript está funcionando");


console.log("JavaScript está funcionando");

// Buscar el botón en el HTML
const botonTema = document.getElementById("interruptor-tema");

// Escuchar cuando el usuario pulsa el botón
botonTema.addEventListener("click", function () {

    // Activar o desactivar el modo oscuro
    document.body.classList.toggle("modo-oscuro");

    // Comprobar qué modo está activo
    const modoOscuroActivo = document.body.classList.contains("modo-oscuro");

    // Cambiar el texto del botón
    if (modoOscuroActivo) {
        botonTema.textContent = "☀️ Activar modo claro";
        botonTema.setAttribute("aria-pressed", "true");
    } else {
        botonTema.textContent = "🌙 Activar modo oscuro";
        botonTema.setAttribute("aria-pressed", "false");
    }

});
