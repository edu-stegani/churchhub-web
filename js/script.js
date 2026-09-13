
/**
 * IgrejaHub
 * Igreja Batista Maanaim
 *
 * JavaScript principal da aplicação
 */

// ========================================
// Menu mobile
// ========================================

const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
    );

});


// ========================================
// Fechar menu ao clicar em um link
// ========================================

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Abrir menu");

    });

});


// ========================================
// Atualizar ano do footer
// ========================================

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();


// ========================================
// Log inicial da aplicação
// ========================================

console.log("IgrejaHub iniciado com sucesso!");
console.log("Igreja Batista Maanaim — Home carregada!");