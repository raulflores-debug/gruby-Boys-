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


// Buscar el botón del menú hamburguesa
const botonMenu = document.getElementById("boton-menu");

// Buscar el menú de navegación
const menuNavegacion = document.querySelector("header nav");

// Detectar cuando se pulsa el botón
botonMenu.addEventListener("click", function () {

    // Abrir o cerrar el menú
    menuNavegacion.classList.toggle("menu-abierto");

    // Comprobar si el menú está abierto
    const menuAbierto = menuNavegacion.classList.contains("menu-abierto");

    // Actualizar el estado del botón
    botonMenu.setAttribute("aria-expanded", menuAbierto);

    // Actualizar la descripción del botón
    if (menuAbierto) {
        botonMenu.setAttribute("aria-label", "Cerrar menú");
    } else {
        botonMenu.setAttribute("aria-label", "Abrir menú");
    }

});

