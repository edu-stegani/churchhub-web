/**
 * IgrejaHub
 * Controle do menu mobile
 */

// ========================================
// Elementos do menu
// ========================================

const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");


// ========================================
// Abrir e fechar menu mobile
// ========================================

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = nav.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Fechar menu" : "Abrir menu"
        );

    });

}


// ========================================
// Fechar menu ao clicar em um link
// ========================================

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (nav && menuToggle) {

            nav.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        }

    });

});