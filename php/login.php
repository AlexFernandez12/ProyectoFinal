<?php
include("BaseDatos.php");//incluimos la pagina conexion.php
include("cabecera.php")

$usuario = $_POST['usuario'];//cogemos los valores de nombre con el post y los guardamos en una variable
$password = $_POST['password'];
$email = $_POST['email'];
    $sentencia =("SELECT * FROM Usuarios");
    $resultado = mysqli_query($conn, $sentencia);
    $resultado=mysqli_fetch_all($resultado,MYSQLI_ASSOC);
 
        foreach($resultado as $opcion){
        $nombre=$opcion["username"];
        $pass=$opcion["contrasena"];
        $email=$opcion["email"];
        if($usuario==$nombre && $password== $pass){
            echo json_encode("Funciona");
           
        }
        }  
                                    
  
?>