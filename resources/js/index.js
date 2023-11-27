document.addEventListener('DOMContentLoaded', function(event) {
    const htmlPage = document.querySelector('html');
    const switcher = document.querySelector('#switch-theme');

    switcher.addEventListener('change', function(){
    const isDarkMode = htmlPage.classList.toggle('dark-mode') ? 'dark' : 'light'
    changeAssets(isDarkMode); 
})});

function changeAssets(mode) {
    const nameLogo = document.querySelector('[data-observable-mode="name"]')
    nameLogo.src = `./resources/imgs/logo-name-${mode}.svg`;

    const switchLanguageIcon = document.querySelector('[data-observable-mode="switch-language-icon"]')
    switchLanguageIcon.src = `./resources/imgs/icons/icon-switch-language-${mode}.svg`;

    const hamburguerMenuIcon = document.querySelector('[data-observable-mode="switch-hamburguer-menu-icon"]')
    hamburguerMenuIcon.src = `./resources/imgs/icons/hamburger-menu-${mode}.svg`;

    const profileHero = document.querySelector('[data-observable-mode="profile-hero"]')
    profileHero.src = `./resources/imgs/image-hero-bruna-${mode}.svg`;

    const linkedin = document.querySelectorAll('[data-observable-mode="linkedin"]')
    linkedin[0].src = `./resources/imgs/icons/icon-linkedin-${mode}.svg`;
    linkedin[1].src = `./resources/imgs/icons/icon-linkedin-${mode}.svg`;

    const github = document.querySelectorAll('[data-observable-mode="github"]')
    github[0].src = `./resources/imgs/icons/icon-github-${mode}.svg`;
    github[1].src = `./resources/imgs/icons/icon-github-${mode}.svg`;

    const email = document.querySelectorAll('[data-observable-mode="email"]')
    email[0].src = `./resources/imgs/icons/icon-email-${mode}.svg`;
    email[1].src = `./resources/imgs/icons/icon-email-${mode}.svg`;
} 

function toggleMenuHeader() {
    var navLinks = document.getElementById('nav-menu-links');
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'block';
    }
  }