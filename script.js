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

        // Função para exibir a pré-visualização da capa do livro
document.getElementById('bookCover').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Exibe a imagem selecionada na área de pré-visualização
            const imageElement = document.getElementById('coverImage');
            const previewElement = document.getElementById('coverPreview');
            
            imageElement.src = e.target.result; // Define o conteúdo da imagem
            previewElement.style.display = 'block'; // Torna a pré-visualização visível
        };

        // Lê a imagem como URL
        reader.readAsDataURL(file);
    }
});

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

    <script>
        // Função para calcular a data de devolução
        document.getElementById('loanDate').addEventListener('change', function() {
            // Obter a data do empréstimo
            const loanDate = new Date(this.value);
            
            // Verificar se a data do empréstimo é válida
            if (!isNaN(loanDate)) {
                // Adicionar 7 dias à data do empréstimo
                loanDate.setDate(loanDate.getDate() + 7);

                // Formatar a data para o formato 'yyyy-mm-dd'
                const returnDate = loanDate.toISOString().split('T')[0];

                // Definir a data de devolução no campo correspondente
                document.getElementById('returnDate').value = returnDate;
            }
        });
    </script>

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
const viewDate = document.querySelector(".date");
const viewTime = document.querySelector(".time");

const fullDate = new Date();
const day = fullDate.toLocaleString("pt-BR", { weekday: "long" });
const formatedDay = day.charAt(0).toUpperCase() + day.slice(1);

const hours = String(fullDate.getHours()).padStart(2, "0");
const minutes = String(fullDate.getMinutes()).padStart(2, "0");
const seconds = String(fullDate.getSeconds()).padStart(2, "0");
const fullTime = `${hours}:${minutes}:${seconds}`;

viewDate.textContent = formatedDay;
viewTime.textContent = fullTime;
       // Dados simulados de usuários e livros
        const users = [
            { id: 1, name: "João" },
            { id: 2, name: "Maria" },
            { id: 3, name: "Pedro" }
        ];

        const books = [
            { id: 1, title: "JavaScript: O Guia Definitivo" },
            { id: 2, title: "HTML & CSS: Design e Construção de Sites" },
            { id: 3, title: "Node.js para Iniciantes" }
        ];

        // Função para preencher os campos de usuário e livro
        function populateFields() {
            const loanUserSelect = document.getElementById("loanUser");
            const returnUserSelect = document.getElementById("returnUser");
            const loanBookSelect = document.getElementById("loanBook");
            const returnBookSelect = document.getElementById("returnBook");

            // Preencher campos de usuários
            users.forEach(user => {
                const optionUser = document.createElement("option");
                optionUser.value = user.id;
                optionUser.textContent = user.name;
                loanUserSelect.appendChild(optionUser);
                returnUserSelect.appendChild(optionUser.cloneNode(true)); // Reutiliza a mesma lista para devolução
            });

            // Preencher campos de livros
            books.forEach(book => {
                const optionBook = document.createElement("option");
                optionBook.value = book.id;
                optionBook.textContent = book.title;
                loanBookSelect.appendChild(optionBook);
                returnBookSelect.appendChild(optionBook.cloneNode(true)); // Reutiliza a mesma lista para devolução
            });
        }

        // Função para registrar o empréstimo
        document.getElementById("loanForm").addEventListener("submit", function (event) {
            event.preventDefault();

            const loanUser = document.getElementById("loanUser").value;
            const loanBook = document.getElementById("loanBook").value;
            const loanDate = document.getElementById("loanDate").value;

            console.log(`Empréstimo registrado: Usuário ${loanUser}, Livro ${loanBook}, Data ${loanDate}`);
            alert("Empréstimo registrado com sucesso!");
        });

        // Função para registrar a devolução
        document.getElementById("returnForm").addEventListener("submit", function (event) {
            event.preventDefault();

            const returnUser = document.getElementById("returnUser").value;
            const returnBook = document.getElementById("returnBook").value;
            const returnDate = document.getElementById("returnDateAction").value;

            console.log(`Devolução registrada: Usuário ${returnUser}, Livro ${returnBook}, Data ${returnDate}`);
            alert("Devolução registrada com sucesso!");
        });

        // Preencher os campos de usuário e livro ao carregar a página
        window.onload = populateFields;
    
