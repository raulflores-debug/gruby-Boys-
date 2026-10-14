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

// Buscamos el formulario y el aviso
const formulario = document.getElementById("form-contacto");
const aviso = document.getElementById("aviso-contacto");

// Cuando hacemos clic en Enviar, revisamos los datos
formulario.addEventListener("submit", function (evento) {

    // Hacemos que la página no se recargue
    evento.preventDefault();

    // Guardamos lo que escribimos en los campos
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Borramos el aviso anterior
    aviso.textContent = "";
    aviso.className = "aviso";

    // Si falta algún dato, mostramos un aviso
    if (nombre === "" || correo === "" || asunto === "" || mensaje === "") {
        aviso.textContent = "¡Casero, te faltó completar algún campito! Revísalo, por favor.";
        aviso.classList.add("error");
        return;
    }

    // Comprobamos que el correo esté bien escrito
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoCorreo.test(correo)) {
        aviso.textContent = "¡Casero, revisa tu correo! Parece que hay un error.";
        aviso.classList.add("error");
        return;
    }

    // Si todo está bien, mostramos este mensaje
    aviso.textContent = "¡Listo, caserito! Todo está en orden. ¡Gracias por escribirnos!";
    aviso.classList.add("exito");

});
