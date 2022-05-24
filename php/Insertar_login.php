<?php
include("BaseDatos.php");//incluimos la pagina conexion.php
$usuario = $_POST['usuario'];
$password = $_POST['password'];//cogemos los valores de nombre con el post y los guardamos en una variable
$email = $_POST['email'];

if($usuario!='' && $password!='' && $email != ''){
        $sentencia = $conn->prepare("INSERT INTO Usuarios(username,email,contraseña) VALUES (?,?,?)");
        $sentencia->bind_param("sss",$usuario,$password, $email);
        $sentencia->execute();
        echo json_encode("Funciona correctamente");
    }else{
        echo "Error";
    }                                      
 
 
?>