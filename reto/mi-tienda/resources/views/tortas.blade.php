
@extends('layouts.app')

@section('title', 'Pasteleria La Espiga')

@section('content')
    <h1>Pasteleria La Espiga</h1>

    <p>Bienvenido a nuestra pastelería. Aquí puedes consultar las tortas disponibles.</p>

    <p>Total de tortas registradas: {{ count($tortas) }}</p>

    <a href="/tortas/nuevo">Registrar una torta</a>

    @foreach ($tortas as $torta)
        <div>
            <h2>{{ $torta->sabor }}</h2>
            <p>Precio: Bs {{ $torta->precio }}</p>
        </div>
    @endforeach

    <p>Vitrina atendida por Raúl Flores Poma</p>
@endsection
