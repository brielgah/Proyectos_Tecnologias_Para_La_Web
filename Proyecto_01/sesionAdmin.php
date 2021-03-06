<?php
    include('displayTable.php');
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <title>Registro enero 2020</title>
        <style>
            label{
                font-weight: bold;
            }
            p{
                font-size: large;
            }
        </style>
    </head>
    <body class="bg-light">
        <nav class="navbar navbar-light navbar-expand-lg container" style="background-color: #e3f2fd;">
            <div class="collapse navbar-collapse" id="navbar-content">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="./index.html">Registro</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="https://www.ipn.mx/">IPN</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="https://www.escom.ipn.mx/">ESCOM</a>
                    </li>
                </ul>
            </div>
            <div class="navbar-nav mr-auto header">
                <a class="nav-link" href="https://www.ipn.mx/"><img src="figures/ipn.png"  width="60" height="40" class="d-inline-block align-top" alt="ipn"></a>
            </div>
        </nav>
        <main class="container">
             <div class="card bg-light mb-3">
                <div class="card-header"><h1>Registro de alumnos: </h1></div>
                <div class="card-body">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Boleta</th>
                                <th scope="col">Nombre(s)</th>
                                <th scope="col">Modificar</th>
                                <th scope="col">Eliminar</th>
                                <th scope="col">PDF</th>    
                            </tr>
                        </thead>
                        <tbody>
                            <?php 
                                while($alumno=mysqli_fetch_object($result))
                                {
                            ?>
                            <tr>
                                <td> <?php echo "$alumno->boleta"; ?> </td>
                                <td> <?php echo "$alumno->ap_paterno"." "."$alumno->ap_materno"." "."$alumno->nombre"; ?> </td>
                                <td> <a href="./modificacionDatos.php?boleta=<?php echo $alumno->boleta;?>">Modificar </a> </td>
                                <td> <a href="./eliminacionDatos.php?boleta=<?php echo $alumno->boleta;?>">Eliminar </a> </td>
                                <td> <a href="./genPdf.php?boleta=<?php echo $alumno->boleta; ?>">Generar </a> </td>
                            </tr>
                            <?php
                                }
                                mysqli_free_result($result);
                            ?>
                        </tbody>
                    </table>
                </div>
                <div class="card-footer bg-transparent border-s text-right">   
                    <button type="button" onclick="location.href='./inicioSesion.html'" id="log-out" class="btn btn-outline-dark">Salir <i class="fa fa-sign-out"></i>                                </button>
                </div>
             </div>
        </main>
    </body>
</html>