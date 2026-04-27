// Park menu
const park = document.getElementById('park');
const nav = document.getElementById('main-nav');

    park.addEventListener('click', () => {
    park.classList.toggle('open');
    nav.classList.toggle('open');
});

// Cierra el menú al hacer clic en un enlace
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        park.classList.remove('open');
        nav.classList.remove('open');
    });
});