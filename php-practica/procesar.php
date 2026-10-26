<?php
// Solo aceptar datos enviados desde el formulario
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: index.html#contacto");
    exit;
}

// Recibir los datos
$nombre  = trim($_POST["nombre"] ?? "");
$correo  = trim($_POST["correo"] ?? "");
$telefono = trim($_POST["telefono"] ?? "");
$asunto  = trim($_POST["asunto"] ?? "");
$mensaje = trim($_POST["mensaje"] ?? "");

// Validar los campos
if ($nombre === "" || $correo === "" || $telefono === "" || $asunto === "" || $mensaje === "") {
    $titulo = "Faltan algunos datos";
    $resultado = "Completa todos los campos, incluido el telefono, antes de enviar.";
    $tipo = "error";
} elseif (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    $titulo = "Revisa tu correo";
    $resultado = "Escribe una dirección de correo válida.";
    $tipo = "error";
} elseif (!preg_match('/^[0-9]{8}$/', $telefono)) {
    $titulo = "Revisa tu teléfono";
    $resultado = "Caserito, ingresa un número telefónico de 8 dígitos.";
    $tipo = "error";
} else {
    $titulo = "¡Consulta recibida!";
    $resultado = "Gracias por contactarnos, caserito. Los datos llegaron correctamente a PHP.";
    $tipo = "exito";
}

// Evitar que los datos introduzcan HTML en la página
function seguro($texto) {
    return htmlspecialchars($texto, ENT_QUOTES, "UTF-8");
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado | Metal Mecánica</title>

    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            min-height: 100vh;
            padding: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Arial, sans-serif;
            color: #263746;
            background: linear-gradient(135deg, #eaf2f8, #d5e6f5);
        }

        .tarjeta {
            width: 100%;
            max-width: 620px;
            padding: 35px;
            background: white;
            border-radius: 18px;
            box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
            text-align: center;
        }

        .icono {
            width: 72px;
            height: 72px;
            margin: 0 auto 18px;
            display: grid;
            place-items: center;
            border-radius: 50%;
            font-size: 36px;
        }

        .exito .icono {
            color: #13834a;
            background: #d9f7e8;
        }

        .error .icono {
            color: #b42318;
            background: #ffe1e1;
        }

        h1 {
            color: #174a75;
            font-size: 28px;
        }

        .descripcion {
            line-height: 1.7;
            color: #536474;
        }

        .datos {
            margin-top: 24px;
            padding: 20px;
            border-radius: 12px;
            background: #f4f8fb;
            text-align: left;
            overflow-wrap: anywhere;
        }

        .datos p {
            line-height: 1.6;
        }

        .boton {
            display: inline-block;
            margin-top: 22px;
            padding: 13px 22px;
            border-radius: 8px;
            background: #1769aa;
            color: white;
            text-decoration: none;
            font-weight: bold;
        }

        .boton:hover {
            background: #104c7c;
        }

        @media (max-width: 480px) {
            .tarjeta {
                padding: 24px 18px;
            }
        }
    </style>
</head>
<body>
    <main class="tarjeta <?php echo seguro($tipo); ?>">
        <div class="icono">
            <?php echo $tipo === "exito" ? "✓" : "!"; ?>
        </div>

        <h1><?php echo seguro($titulo); ?></h1>
        <p class="descripcion"><?php echo seguro($resultado); ?></p>

        <?php if ($tipo === "exito"): ?>
            <section class="datos">
                <h2>Resumen de tu consulta</h2>
                <p><strong>Nombre:</strong> <?php echo seguro($nombre); ?></p>
                <p><strong>Correo:</strong> <?php echo seguro($correo); ?></p>
                <p><strong>Teléfono:</strong> <?php echo seguro($telefono); ?></p>
                <p><strong>Asunto:</strong> <?php echo seguro($asunto); ?></p>
                <p><strong>Mensaje:</strong><br><?php echo nl2br(seguro($mensaje)); ?></p>
            </section>
        <?php endif; ?>

        <a class="boton" href="index.html#contacto">Volver al formulario</a>
    </main>
</body>
</html>
