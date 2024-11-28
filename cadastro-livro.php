<?php
// Verificar se o formulário foi enviado
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Coletando os dados do formulário
    $bookName = $_POST['bookName'];
    $bookPublisher = $_POST['bookPublisher'];
    $bookYear = $_POST['bookYear'];
    $bookAuthor = $_POST['bookAuthor'];
    $bookQuantity = $_POST['bookQuantity'];
    $bookIsbn = $_POST['bookIsbn'];
    $bookGenre = $_POST['bookGenre'];

    // Processar o upload da capa
    if (isset($_FILES['bookCover']) && $_FILES['bookCover']['error'] == 0) {
        $cover = $_FILES['bookCover'];
        $ext = pathinfo($cover['name'], PATHINFO_EXTENSION);
        $fileName = 'cover_' . time() . '.' . $ext;
        $filePath = 'uploads/' . $fileName;

        // Crie a pasta de uploads, caso não exista
        if (!is_dir('uploads')) {
            mkdir('uploads');
        }

        // Move a imagem para a pasta 'uploads'
        if (move_uploaded_file($cover['tmp_name'], $filePath)) {
            echo "Livro cadastrado com sucesso! Capa carregada.";
            // Aqui, você pode salvar os dados no banco de dados se necessário
        } else {
            echo "Erro ao carregar a imagem.";
        }
    } else {
        echo "Por favor, selecione uma capa.";
    }
}
?>
