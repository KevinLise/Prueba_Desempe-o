// Hamburger menu
const parkt = document.getElementById('parkt');
const nav = document.getElementById('main-nav');

parkt.addEventListener('click', () => {
    parkt.classList.toggle('open');
    nav.classList.toggle('open');
});

// Cierra el menú al hacer clic en un enlace
    nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
    parkt.classList.remove('open');
    nav.classList.remove('open');
    });
});