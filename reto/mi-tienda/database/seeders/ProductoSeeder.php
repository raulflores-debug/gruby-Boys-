<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Producto;

class ProductoSeeder extends Seeder
{
    public function run(): void
    {
        Producto::create([
            'nombre' => 'Polera básica',
            'descripcion' => 'Polera de uso diario',
            'precio' => 45.00,
        ]);

        Producto::create([
            'nombre' => 'Mochila',
            'descripcion' => 'Mochila para uso diario',
            'precio' => 85.00,
        ]);

        Producto::create([
            'nombre' => 'Gorra',
            'descripcion' => 'Gorra casual',
            'precio' => 30.00,
        ]);
    }
}