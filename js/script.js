const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.style.display = navbar.style.display === 'none' || navbar.style.display === '' ? 'flex' : 'none';
});
