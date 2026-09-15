/**
 * IgrejaHub
 * Controle do footer
 */

// ========================================
// Atualizar ano do footer
// ========================================

const currentYear = document.getElementById("current-year");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}