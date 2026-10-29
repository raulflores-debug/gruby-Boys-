<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productos - Mi Tiendita</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 900px;
            margin: 40px auto;
            padding: 20px;
            background: #f4f4f4;
        }

        h1 {
            color: #333;
        }

        .producto {
            background: white;
            padding: 16px;
            margin-bottom: 12px;
            border-radius: 8px;
        }

        .precio {
            font-weight: bold;
            color: #167342;
        }
    </style>
</head>
<body>
    <h1>Productos de Mi Tiendita</h1>

    @forelse ($productos as $producto)
        <div class="producto">
            <h2>{{ $producto->nombre }}</h2>
            <p>{{ $producto->descripcion }}</p>
            <p class="precio">Bs {{ number_format($producto->precio, 2) }}</p>
        </div>
    @empty
        <p>Todavía no hay productos registrados.</p>
    @endforelse

</body>
</html>