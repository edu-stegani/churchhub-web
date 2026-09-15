/**
 * IgrejaHub
 * Funcionalidades da página de doação
 */

// ========================================
// Elementos da funcionalidade Pix
// ========================================

const copyPixButton =
    document.getElementById("copy-pix-button");

const pixCode =
    document.getElementById("pix-code");

const copyMessage =
    document.getElementById("copy-message");


// ========================================
// Verificar se estamos na página de doação
// ========================================

if (
    copyPixButton &&
    pixCode &&
    copyMessage
) {

    console.log("Página de doação carregada.");
    console.log("Botão Pix encontrado:", copyPixButton);


    // ========================================
    // Copiar código Pix
    // ========================================

    copyPixButton.addEventListener("click", function () {

        console.log("Botão Copiar código Pix clicado.");

        const code = pixCode.value.trim();


        // ========================================
        // Validar código Pix
        // ========================================

        if (!code) {

            copyMessage.textContent =
                "O código Pix está vazio.";

            return;

        }


        // ========================================
        // Selecionar código Pix
        // ========================================

        pixCode.focus();

        pixCode.select();

        pixCode.setSelectionRange(
            0,
            pixCode.value.length
        );


        // ========================================
        // Copiar código Pix
        // ========================================

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