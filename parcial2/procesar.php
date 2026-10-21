
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pedido recibido</title>
</head>

<body>

    <h1>Pedido recibido en Salteñería El Horno</h1>

    <?php
    $nombre = htmlspecialchars($_POST["nombre"] ?? "", ENT_QUOTES, "UTF-8");
    $correo = htmlspecialchars($_POST["correo"] ?? "", ENT_QUOTES, "UTF-8");
    $pedido = htmlspecialchars($_POST["pedido"] ?? "", ENT_QUOTES, "UTF-8");
    ?>

    <p>Nombre completo: <?php echo $nombre; ?></p>
    <p>Correo electrónico: <?php echo $correo; ?></p>
    <p>Tu pedido: <?php echo nl2br($pedido); ?></p>

    <h2>Lista de precios</h2>

    <?php
    $precios = [
        "Salteña de pollo - Bs 6",
        "Docena de salteñas - Bs 65",
        "Refresco de mocochinchi - Bs 5"
    ];

    echo "<ul>";

    foreach ($precios as $producto) {
        echo "<li>" . htmlspecialchars($producto, ENT_QUOTES, "UTF-8") . "</li>";
    }

    echo "</ul>";
    ?>

    <p>Te atiende Raúl Flores Poma.</p>

</body>

</html>
