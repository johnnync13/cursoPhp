<!doctype html>
<html lang="en">

<head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous">
</head>

<body>

    <div class="jumbotron">
        <h1 class="display-4">Costantes</h1>
        <p class="lead">PHP</p>
        <hr class="my-4">
        <p>Es un contenedor de informacion que no puede modificar</p>
    </div>

    <?php
        // Constantes
        define('nombre', 'Titi Gomes');
        define('web', 'TitiGomes.com');
        
        // Imprimir Constantes
        echo '<h2>'.nombre.'</h2>';
        echo '<br>';
        echo '<h2>'.web.'</h2>';


        // Constantes predifinidas
        echo PHP_OS; // veRSION CISTEMA
        echo '<br>';
        echo PHP_VERSION; // VERCION PHP
        echo '<br>';
        echo PHP_EXTENSION_DIR; // directorio
        echo '<br>';
        echo __LINE__; // linea de echo
        echo '<br>';
        echo __FILE__; // direccion archivo
        echo '<br>';
        echo __FUNCTION__; // nombre de la funcion

    ?>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js" integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em" crossorigin="anonymous"></script>
</body>

</html>