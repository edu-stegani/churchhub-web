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

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = nav.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

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

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        }

    });

});


// ========================================
// Atualizar ano do footer
// ========================================

const currentYear = document.getElementById("current-year");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


// ========================================
// Log inicial da aplicação
// ========================================

console.log("IgrejaHub iniciado com sucesso!");


// ========================================
// Página de doação
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const copyPixButton =
        document.getElementById("copy-pix-button");

    const pixCode =
        document.getElementById("pix-code");

    const copyMessage =
        document.getElementById("copy-message");


    // Verifica se estamos na página de doação

    if (
        copyPixButton &&
        pixCode &&
        copyMessage
    ) {

        console.log("Página de doação carregada.");
        console.log("Botão Pix encontrado:", copyPixButton);


        copyPixButton.addEventListener("click", function () {

            console.log("Botão Copiar código Pix clicado.");


            const code = pixCode.value.trim();


            if (!code) {

                copyMessage.textContent =
                    "O código Pix está vazio.";

                return;

            }


            // Seleciona o código Pix

            pixCode.focus();
            pixCode.select();
            pixCode.setSelectionRange(
                0,
                pixCode.value.length
            );


            try {

                const copied =
                    document.execCommand("copy");


                console.log(
                    "Resultado da cópia:",
                    copied
                );


                if (copied) {

                    copyMessage.textContent =
                        "Código Pix copiado com sucesso!";

                    copyPixButton.textContent =
                        "Código copiado!";


                    setTimeout(function () {

                        copyPixButton.textContent =
                            "Copiar código Pix";

                        copyMessage.textContent = "";

                    }, 3000);


                } else {

                    copyMessage.textContent =
                        "Não foi possível copiar o código Pix.";

                }


            } catch (error) {

                console.error(
                    "Erro ao copiar o código Pix:",
                    error
                );

                copyMessage.textContent =
                    "Erro ao copiar. Use Ctrl + C.";

            }

        });

    }

});