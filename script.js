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

    // Função para preencher os campos de usuário e livro no início
    function populateFields() {
        const loanUserSelect = document.getElementById("loanUser");
        const returnUserSelect = document.getElementById("returnUser");
        const loanBookSelect = document.getElementById("loanBook");
        const returnBookSelect = document.getElementById("returnBook");

        // Preencher campos de usuários
        users.forEach(user => {
            const optionUser = document.createElement("option");
            optionUser.value = user.name;
            optionUser.textContent = user.name;
            loanUserSelect.appendChild(optionUser);
            returnUserSelect.appendChild(optionUser.cloneNode(true)); // Reutiliza a mesma lista para devolução
        });

        // Preencher campos de livros
        books.forEach(book => {
            const optionBook = document.createElement("option");
            optionBook.value = book.name;
            optionBook.textContent = book.name;
            loanBookSelect.appendChild(optionBook);
            returnBookSelect.appendChild(optionBook.cloneNode(true)); // Reutiliza a mesma lista para devolução
        });
    }

    // Chama a função para preencher os campos quando a página for carregada
    window.onload = populateFields;
});

