
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Pasteleria La Espiga')</title>

    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f7f3ed;
            color: #333;
        }

        header {
            background-color: #5b3924;
            color: white;
            padding: 22px;
            text-align: center;
        }

        nav a {
            color: white;
            margin: 0 12px;
            text-decoration: none;
        }

        nav a:hover {
            text-decoration: underline;
        }

        main {
            max-width: 950px;
            margin: 30px auto;
            padding: 25px;
            background-color: white;
            border-radius: 8px;
        }

        footer {
            background-color: #5b3924;
            color: white;
            text-align: center;
            padding: 15px;
        }
    </style>
</head>
<body>

    <header>
        <h1>Pasteleria La Espiga</h1>

        <nav>
            <a href="/">Inicio</a>
            <a href="/tortas">Tortas</a>
            <a href="/tortas/nuevo">Registrar torta</a>
        </nav>
    </header>

    <main>
        @yield('content')
    </main>

    <footer>
        <p>Integradora - Raúl Flores Poma - 27 de octubre de 2026</p>
    </footer>

</body>
</html>
