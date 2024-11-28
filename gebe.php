$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "biblioteca";

// Criando a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificando a conexão
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Exemplo de inserção de dados no banco de dados
$sql = "INSERT INTO livros (name, publisher, year, author, quantity, isbn, genre, cover) 
        VALUES ('$bookName', '$bookPublisher', '$bookYear', '$bookAuthor', '$bookQuantity', '$bookIsbn', '$bookGenre', '$filePath')";

if ($conn->query($sql) === TRUE) {
    echo "Novo livro cadastrado com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

// Fechar a conexão
$conn->close();
