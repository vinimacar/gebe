// Função para adicionar um livro à lista
document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pegando os valores dos inputs
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const genre = document.getElementById('genre').value;
    const quantidade = document.getElementById('quantidade').value;

    // Criando o item de livro
    const bookItem = document.createElement('li');
    bookItem.innerHTML = `
        <strong>${title}</strong> <br>
        Autor: ${author} <br>
        Ano de publicação: ${year} <br>
        Gênero: ${genre}
        Quantidade: ${quantidade}
    `;

    // Adicionando o livro à lista
    document.getElementById('bookList').appendChild(bookItem);

    // Limpando os campos do formulário
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('year').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('quantidade').value = '';
