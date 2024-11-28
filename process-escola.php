<?php
// Incluindo o arquivo de conexão com o banco de dados
include 'conexao.php';

// Verificando se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Captura os dados do formulário
    $nome = $_POST['schoolName'];
    $codigo = $_POST['schoolCode'];
    $cnpj = $_POST['schoolCnpj'];
    $endereco = $_POST['schoolAddress'];
    $telefone = $_POST['schoolPhone'];
    $diretor = $_POST['schoolDirector'];

    // SQL para inserir os dados na tabela
    $sql = "INSERT INTO cadastroescola (Nome, Código, CNPJ, Endereco, Telefone, Diretor)
            VALUES ('$nome', '$codigo', '$cnpj', '$endereco', '$telefone', '$diretor')";

    // Executando a consulta SQL
    if ($conn->query($sql) === TRUE) {
        echo "Escola cadastrada com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }

    // Fechando a conexão
    $conn->close();
}
?>
