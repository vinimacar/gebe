<?php
// Incluindo o arquivo de conexão com o banco de dados
include 'conexao.php';

// Verificando se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Captura e limpa os dados do formulário para evitar XSS e SQL Injection
    $nome = mysqli_real_escape_string($conn, $_POST['schoolName']);
    $codigo = mysqli_real_escape_string($conn, $_POST['schoolCode']);
    $cnpj = mysqli_real_escape_string($conn, $_POST['schoolCnpj']);
    $endereco = mysqli_real_escape_string($conn, $_POST['schoolAddress']);
    $telefone = mysqli_real_escape_string($conn, $_POST['schoolPhone']);
    $diretor = mysqli_real_escape_string($conn, $_POST['schoolDirector']);

    // Preparando a consulta SQL para inserção
    $stmt = $conn->prepare("INSERT INTO cadastroescola (Nome, Código, CNPJ, Endereco, Telefone, Diretor) 
                            VALUES (?, ?, ?, ?, ?, ?)");

    // Verificando se a consulta foi preparada corretamente
    if ($stmt === false) {
        die("Erro na preparação da consulta: " . $conn->error);
    }

    // Vinculando os parâmetros da consulta
    $stmt->bind_param("ssssss", $nome, $codigo, $cnpj, $endereco, $telefone, $diretor);

    // Executando a consulta
    if ($stmt->execute()) {
        echo "Escola cadastrada com sucesso!";
    } else {
        echo "Erro: " . $stmt->error;
    }

    // Fechar a declaração e a conexão
    $stmt->close();
    $conn->close();
}
?>
