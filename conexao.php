<?php
$servername = "127.0.0.1";  // ou o endereço do servidor de banco de dados
$username = "root";         // seu nome de usuário MySQL
$password = "";             // sua senha MySQL
$dbname = "escolasDB";      // nome do seu banco de dados

// Criando a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificando a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
?>
