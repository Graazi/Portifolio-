// Menu responsivo
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Fecha o menu ao clicar em um link
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Alternância de tema
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️ Tema claro";
    } else {
        themeToggle.textContent = "🌙 Tema escuro";
    }
});

// Botão "Mostrar mais"
const moreBtn = document.getElementById("moreBtn");
const moreContent = document.getElementById("moreContent");

moreBtn.addEventListener("click", () => {
    const isVisible = moreContent.classList.toggle("show");

    moreBtn.textContent = isVisible ? "Mostrar menos" : "Mostrar mais";
});

// Validação do formulário
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

function clearErrors() {
    [nameInput, emailInput, messageInput].forEach((input) => {
        input.classList.remove("input-error");
    });

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();

    let valid = true;

    if (nameInput.value.trim().length < 2) {
        nameInput.classList.add("input-error");
        nameError.textContent = "Digite seu nome.";
        valid = false;
    }

    if (!validateEmail(emailInput.value.trim())) {
        emailInput.classList.add("input-error");
        emailError.textContent = "Digite um email válido.";
        valid = false;
    }

    if (messageInput.value.trim().length < 10) {
        messageInput.classList.add("input-error");
        messageError.textContent = "A mensagem deve ter pelo menos 10 caracteres.";
        valid = false;
    }

    if (valid) {
        successMessage.textContent = "Mensagem validada com sucesso! Obrigada pelo contato.";
        contactForm.reset();
    }
});

// Ano atual via JavaScript
document.getElementById("currentYear").textContent = new Date().getFullYear();