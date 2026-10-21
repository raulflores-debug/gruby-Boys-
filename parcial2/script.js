
const formulario = document.querySelector("#form-horno");
const aviso = document.querySelector("#aviso-horno");

function validarPedido(event) {
    const nombre = document.querySelector("#nombre").value.trim();
    const correo = document.querySelector("#correo").value.trim();

    if (nombre === "" || correo === "") {
        aviso.textContent = "Sin tu nombre y tu correo no anotamos el pedido.";
        aviso.classList.add("error");
        aviso.classList.remove("exito");
        event.preventDefault();
    } else if (!correo.includes("@")) {
        aviso.textContent = "A ese correo le falta el arroba - corregilo antes de enviar.";
        aviso.classList.add("error");
        aviso.classList.remove("exito");
        event.preventDefault();
    } else {
        aviso.textContent = "Pedido tomado - te atiende Raúl Flores Poma";
        aviso.classList.add("exito");
        aviso.classList.remove("error");
    }
}

formulario.addEventListener("submit", validarPedido);
