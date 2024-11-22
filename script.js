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
    document.addEventListener('DOMContentLoaded', () => {
    const loanLink = document.getElementById('loanLink');
    const returnLink = document.getElementById('returnLink');
    const loanSection = document.getElementById('loanSection');
    const returnSection = document.getElementById('returnSection');
    const loanForm = document.getElementById('loanForm');
    const returnForm = document.getElementById('returnForm');

    const loanUserSelect = document.getElementById('loanUser');
    const loanBookSelect = document.getElementById('loanBook');
    const returnUserSelect = document.getElementById('returnUser');
    const returnBookSelect = document.getElementById('returnBook');
    const returnDateInput = document.getElementById('returnDate');
    const returnDateAction = document.getElementById('returnDateAction');

    const users = [];
    const books = [];
    const loans = [];

    // Função para preencher os campos de usuário e livro
    function populateFields() {
        users.forEach(user => {
            const optionUser = document.createElement('option');
            optionUser.value = user.name;
            optionUser.textContent = user.name;
            loanUserSelect.appendChild(optionUser);
            returnUserSelect.appendChild(optionUser.cloneNode(true)); // Reutiliza a mesma lista para devolução
        });

        books.forEach(book => {
            const optionBook = document.createElement('option');
            optionBook.value = book.name;
            optionBook.textContent = book.name;
            loanBookSelect.appendChild(optionBook);
            returnBookSelect.appendChild(optionBook.cloneNode(true)); // Reutiliza a mesma lista para devolução
        });
    }

    // Alterna entre Empréstimo e Devolução
    loanLink.addEventListener('click', () => {
        loanSection.style.display = 'block';
        returnSection.style.display = 'none';
    });

    returnLink.addEventListener('click', () => {
        loanSection.style.display = 'none';
        returnSection.style.display = 'block';
    });

    // Registrar Empréstimo
    loanForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const user = loanUserSelect.value;
        const book = loanBookSelect.value;
        const loanDate = document.getElementById('loanDate').value;
        const returnDate = returnDateInput.value;

        loans.push({ user, book, loanDate, returnDate });

        alert('Empréstimo registrado com sucesso!');
    });

    // Registrar Devolução
    returnForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const returnUser = returnUserSelect.value;
        const returnBook = returnBookSelect.value;
        const returnDate = returnDateAction.value;

        // Encontrar o empréstimo correspondente e remover
        const index = loans.findIndex(loan => loan.user === returnUser && loan.book === returnBook);
        if (index !== -1) {
            loans.splice(index, 1); // Remove o empréstimo da lista
        }

        // Preencher o comprovante de devolução
        document.getElementById('comprovanteReturnUser').textContent = returnUser;
        document.getElementById('comprovanteReturnBook').textContent = returnBook;
        document.getElementById('comprovanteReturnDate').textContent = returnDate;

        // Mostrar o comprovante
        document.getElementById('returnComprovante').style.display = 'block';
    });

    // Função para imprimir o comprovante
    function printComprovante(comprovanteId) {
        const comprovante = document.getElementById(comprovanteId);
        const printWindow = window.open('', '', 'height=500, width=800');
        printWindow.document.write(comprovante.innerHTML);
        printWindow.document.close();
        printWindow.print();
    }

    // Inicializar os campos
    populateFields();
});
