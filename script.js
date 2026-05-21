// ============================================================
// script.js – Menu hamburger responsive
// ============================================================

const hamburgerBtn = document.getElementById('hamburgerBtn');
const mainNav      = document.getElementById('mainNav');

// Ouvre / ferme le menu au clic
hamburgerBtn.addEventListener('click', () => {
    mainNav.classList.toggle('open');
});

// Ferme le menu si on clique sur un lien
mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('open');
    });
});