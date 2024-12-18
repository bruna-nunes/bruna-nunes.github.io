document.addEventListener('DOMContentLoaded', async () => {

    const userPreferredLanguage = localStorage.getItem('languagePortfolioBrunaNunes') || 'pt';
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(userPreferredLanguage, langData);

    const htmlPage = document.querySelector('html');
    const switcher = document.querySelector('#switch-theme');

    const userPreferredTheme = localStorage.getItem('themePortfolioBrunaNunes') || 'light';
    if (userPreferredTheme === 'dark') {
        htmlPage.classList.add('dark-mode')
        changeAssets(userPreferredTheme)
    }
    

    switcher.addEventListener('change', changeTheme)

    const switchThemeContent = document.getElementById('switch-theme-content')
    
    switchThemeContent.addEventListener('focus', (event) => {
        window.addEventListener('keypress', changeThemeKeypress)
    })

    switchThemeContent.addEventListener('blur', (event) => {
        window.removeEventListener('keypress', changeThemeKeypress)
    })
});

function changeThemeKeypress(event) {
    if(event.keyCode === 13) {
        changeTheme()
    }
}

function changeTheme() {
    const htmlPage = document.querySelector('html');
    const mode = htmlPage.classList.toggle('dark-mode') ? 'dark' : 'light'
    setThemePreference(mode)
    changeAssets(mode);    
}

function changeAssets(mode) {
    const nameLogo = document.querySelector('[data-observable-mode="name"]')
    nameLogo.src = `./resources/imgs/logo-name-${mode}.svg`;

    const switchLanguageIcon = document.querySelector('[data-observable-mode="switch-language-icon"]')
    switchLanguageIcon.src = `./resources/imgs/icons/icon-switch-language-${mode}.svg`;

    const hamburguerMenuIcon = document.querySelector('[data-observable-mode="switch-hamburguer-menu-icon"]')
    hamburguerMenuIcon.src = `./resources/imgs/icons/hamburger-menu-${mode}.svg`;

    const profileHero = document.querySelector('[data-observable-mode="profile-hero"]')
    profileHero.src = `./resources/imgs/image-hero-bruna-${mode}.svg`;

    const projectBlush = document.querySelector('[data-observable-mode="project-blush"]')
    projectBlush.src = `./resources/imgs/projects/blush-project-${mode}.jpg`;

    const projectFylo = document.querySelector('[data-observable-mode="project-fylo"]')
    projectFylo.src = `./resources/imgs/projects/fylo-landing-page-frontendmentor-${mode}.jpg`;

    const projectDashboard = document.querySelector('[data-observable-mode="project-dashboard"]')
    projectDashboard.src = `./resources/imgs/projects/social-media-dashboard-frontendmentor-project-${mode}.jpg`;

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
    const menuButton = document.getElementById('mobile-menu-switch')
    var navLinks = document.getElementById('nav-menu-links');
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
        menuButton.setAttribute('aria-expanded', 'false');
    } else {
        navLinks.style.display = 'block';
        menuButton.setAttribute('aria-expanded', 'true');
    }
}

function toggleLangSwitchVisibility(){
    const languageButton = document.getElementById('switch-language')
    var languagesContent = document.getElementById('langs-content');
    if (languagesContent.style.display === 'flex') {
        languagesContent.style.display = 'none';
        languageButton.setAttribute('aria-expanded', 'false');
    } else {
        languagesContent.style.display = 'flex';
        languageButton.setAttribute('aria-expanded', 'true');
    }
}

function updateContent(lang, langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const config = JSON.parse(element.getAttribute('data-i18n'));
        if (config.typeKey) {
            if (config.typeKey === "alt"){
                element.alt = langData[config.key]
            }
            if (config.typeKey === "aria-label"){
                element.ariaLabel = langData[config.key]
            }
            if (config.typeKey === "content"){
                element.content = langData[config.key]
            }
        } else {
            element.innerHTML = langData[config.key];
        }
    });

    document.querySelector('html').lang = lang
}

function setLanguagePreference(lang) {
    localStorage.setItem('languagePortfolioBrunaNunes', lang);
    location.reload();
}

function setThemePreference(theme) {
    localStorage.setItem('themePortfolioBrunaNunes', theme);
}

async function fetchLanguageData(lang) {
    const response = await fetch(`/resources/languages/${lang}.json`);
    return response.json();
}

async function changeLanguage(lang) {
    await setLanguagePreference(lang);
    
    const langData = await fetchLanguageData(lang);
    updateContent(lang, langData);
}