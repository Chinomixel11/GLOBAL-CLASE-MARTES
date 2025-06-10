var navbar = document.querySelector('.nav-container')

window.onscroll = () => {
    if (window.scrollY > 10) {
        navbar.classList.add('nav_active');
    } else {
        navbar.classList.remove('nav_active');
    }
}