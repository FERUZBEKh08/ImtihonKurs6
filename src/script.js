// script.js



window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('activeNav');
    } else {
        navbar.classList.remove('activeNav');
    }
});