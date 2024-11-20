// script.js

document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const bookForm = document.getElementById('bookForm');
    const schoolForm = document.getElementById('schoolForm');
    const loanForm = document.getElementById('loanForm');

    const loanUserSelect = document.getElementById('loanUser');
    const loanBookSelect = document.getElementById('loanBook');
    const returnDateInput = document.getElementById('returnDate');
    
    // Armazenamento temporário para simulação (normalmente seria em um banco de dados)
    const users = [];
    const books = [];
    const schools = [];
    const loans = [];

    // Função para calcular a data de devolução (7 dias após o empréstimo)
    function calculateReturnDate() {
        const loanDate = new Date(document.getElementById('loanDate').value);
        loanDate.setDate(loanDate.getDate() + 7);
        const returnDate = loanDate.toISOString().split('T')[0];
        returnDateInput.value = returnDate;
    }

    // Cadastro de Usuários
    userForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('userName').value;
        const role = document.getElementById('userRole').value;
        const cpf = document.getElementById('userCpf').value;
        const email = document.getElementById('userEmail').value;

        users.push({ name, role, cpf, email });
        
        alert('Usuário cadastrado com sucesso!');
        updateUserList();
    });

    // Cadastro de Livros
    bookForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('bookName').value;
        const publisher = document.getElementById('bookPublisher').value;
        const year = document.getElementById('bookYear').value;
        const author = document.getElementById('bookAuthor').value;
        const quantity = document.getElementById('bookQuantity').value;
        const isbn = document.getElementById('bookIsbn').value;
        const genre = document.getElementById('bookGenre').value;

        books.push({ name, publisher, year, author, quantity, isbn, genre });
        
        alert('Livro cadastrado com sucesso!');
        updateBookList();
    });

    // Cadastro da Escola
    schoolForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('schoolName').value;
        const code = document.getElementById('schoolCode').value;
        const cnpj = document.getElementById('schoolCnpj').value;
        const address = document.getElementById('schoolAddress').value;
        const phone = document.getElementById('schoolPhone').value;
        const director = document.getElementById('schoolDirector').value;

        schools.push({ name, code, cnpj, address, phone, director });

        alert('Escola cadastrada com sucesso!');
    });

    // Cadastro de Empréstimos
    loanForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const user = loanUserSelect.value;
        const book = loanBookSelect.value;
        const loanDate = document.getElementById('loanDate').value;
        const returnDate = returnDateInput.value;

        loans.push({ user, book, loanDate, returnDate });

        alert('Empréstimo registrado com sucesso!');
    });

    // Atualiza as listas de usuários e livros
    function updateUserList() {
        loanUserSelect.innerHTML = '';
        users.forEach(user => {
            const option = document.createElement('option');
            option.value = user.name;
            option.textContent = user.name;
            loanUserSelect.appendChild(option);
        });
    }

    function updateBookList() {
        loanBookSelect.innerHTML = '';
        books.forEach(book => {
            const option = document.createElement('option');
            option.value = book.name;
            option.textContent = book.name;
            loanBookSelect.appendChild(option);
        });
    }

    // Atualiza a data de devolução automaticamente
    document.getElementById('loanDate').addEventListener('change', calculateReturnDate);
});

// script.js

// Dados fictícios de Livros e Usuários
const books = [
    { name: "Livro A", publisher: "Editora X", year: 2021, author: "Autor A", quantity: 5, isbn: "123456789", genre: "Ficção" },
    { name: "Livro B", publisher: "Editora Y", year: 2020, author: "Autor B", quantity: 3, isbn: "987654321", genre: "Romance" },
    { name: "Livro C", publisher: "Editora Z", year: 2019, author: "Autor C", quantity: 8, isbn: "555555555", genre: "Aventura" }
];

const users = [
    { name: "João Silva", role: "Professor", cpf: "123.456.789-00", email: "joao@escola.com" },
    { name: "Maria Souza", role: "Aluno", cpf: "234.567.890-01", email: "maria@escola.com" },
    { name: "Carlos Oliveira", role: "Diretor", cpf: "345.678.901-02", email: "carlos@escola.com" }
];

// Função para preencher a tabela de livros
function fillBooksTable() {
    const booksTableBody = document.getElementById('booksTable').getElementsByTagName('tbody')[0];
    books.forEach(book => {
        const row = booksTableBody.insertRow();
        row.innerHTML = `
            <td>${book.name}</td>
            <td>${book.publisher}</td>
            <td>${book.year}</td>
            <td>${book.author}</td>
            <td>${book.quantity}</td>
            <td>${book.isbn}</td>
            <td>${book.genre}</td>
        `;
    });
}

// Função para preencher a tabela de usuários
function fillUsersTable() {
    const usersTableBody = document.getElementById('usersTable').getElementsByTagName('tbody')[0];
    users.forEach(user => {
        const row = usersTableBody.insertRow();
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.role}</td>
            <td>${user.cpf}</td>
            <td>${user.email}</td>
        `;
    });
}

// Preencher as tabelas quando a página carregar
window.onload = function() {
    fillBooksTable();
    fillUsersTable();
};
