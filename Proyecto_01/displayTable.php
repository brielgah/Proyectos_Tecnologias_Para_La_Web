<?php
$con=mysqli_connect("localhost", "root", "57425595", "alumnos");
if(!$con){
    mysqli_close($con);
		echo "<script>
				alert('Error al conectarse a la Base de Datos');
				window.location='./index.html';
				</script>";
}
else{
    $result=my_sqli_query($con, "SELECT boleta, nombre,  FROM alumnos");
    while($row = my_sqli_fetch_array($result)){
        echo "<tr>";
        echo "<td>".$row['boleta']."</td>";
        echo "<td>".$row['nombre']."</td>";
        echo "<td>Prueba</td>";
        echo "<td>Prueba</td>";
        echo "<td>Prueba</td>";
        echo "<td>Prueba</td>";
        echo "</tr>";
    }
}
my_sqli_close($con);
?>