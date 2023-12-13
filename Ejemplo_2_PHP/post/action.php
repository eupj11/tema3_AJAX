<?php 
if (isset($_POST["nombre"], $_POST["apellido"])) {
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
 
    echo "Mi nombre es $nombre $apellido";
} else {
    echo "Falta el formulario";
}
?>