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
if (formulario && aviso) {
    formulario.addEventListener("submit", function (evento) {

// Guardamos lo que escribimos en los campos
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Borramos el aviso anterior
    aviso.textContent = "";
    aviso.className = "aviso";

    // Revisamos si falta el nombre
    if (nombre === "") {
        aviso.textContent = "¡Casero, no te olvides de escribir tu nombre completo para identificar tu consulta!";
        aviso.classList.add("error");
        return;
    }

    // Revisamos si falta el correo
    if (correo === "") {
        aviso.textContent = "¡Caserito, necesitamos tu correo electrónico para poder contactarte!";
        aviso.classList.add("error");
        return;
    }

    // Comprobamos que el correo esté bien escrito
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoCorreo.test(correo)) {
        aviso.textContent = "¡Casero, revisa tu correo! Debe tener un formato válido, por ejemplo: usuario@correo.com.";
        aviso.classList.add("error");
        return;
    }

    // Revisamos si falta el teléfono
    if (telefono === "") {
        aviso.textContent = "¡Caserito, déjanos tu número telefónico para poder contactarte!";
        aviso.classList.add("error");
        return;
    }

    // Comprobamos que tenga 8 dígitos
    const formatoTelefono = /^[0-9]{8}$/;

    if (!formatoTelefono.test(telefono)) {
        aviso.textContent = "¡Casero, el teléfono debe tener exactamente 8 dígitos!";
        aviso.classList.add("error");
        return;
    }


    // Revisamos si falta el asunto
    if (asunto === "") {
        aviso.textContent = "¡Caserito, cuéntanos de qué trata tu consulta escribiendo un asunto!";
        aviso.classList.add("error");
        return;
    }

    // Revisamos si falta el mensaje
    if (mensaje === "") {
        aviso.textContent = "¡Casero, nos falta conocer tu consulta! Escribe tu mensaje antes de continuar.";
        aviso.classList.add("error");
        return;
    }

    // Si todo está correcto, enviamos los datos a PHP
    aviso.textContent = "¡Excelente, caserito! Completaste todos los campos correctamente. ¡Gracias por contactarte con nosotros! Estamos enviando tu consulta...";
    aviso.classList.add("exito");

    formulario.submit();

});

}