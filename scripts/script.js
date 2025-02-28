function handleEnClick() {
    document.querySelector(".languageChange .enLabel").classList.add("active");
    document.querySelector(".languageChange .huLabel").classList.remove("active");
    
    
    document.querySelectorAll("[data-hu]").forEach((element) => {
        element.style.display = "none";
    });
    document.querySelectorAll("[data-en]").forEach((element) => {
        element.style.display = "";
    });
}

function handleHuClick() {
    document.querySelector(".languageChange .enLabel").classList.remove("active");
    document.querySelector(".languageChange .huLabel").classList.add("active");
    
    
    document.querySelectorAll("[data-en]").forEach((element) => {
        element.style.display = "none";
    });
    document.querySelectorAll("[data-hu]").forEach((element) => {
        element.style.display = "";
    });
}

function handleNavClick(event) {
    const navItems = document.querySelectorAll(".navbar-links > div");
    navItems.forEach((item) => {
        item.classList.remove("navActive");
    });
    event.target.classList.add("navActive");
}


document.addEventListener("DOMContentLoaded", () => {
    handleEnClick(); 
});


const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const lines = document.querySelectorAll('.line');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    const isDarkTheme = body.classList.contains('dark-theme');
    toggleButton.innerHTML = isDarkTheme
        ? '<i class="fas fa-moon"></i>'
        : '<i class="fa-solid fa-lightbulb"></i>';
});

const toggleButtonMobile = document.getElementById('theme-toggle-mobile');
const bodyMobile = document.body;

toggleButtonMobile.addEventListener('click', () => {
    bodyMobile.classList.toggle('dark-theme');
    bodyMobile.classList.toggle('light-theme');

    const isDarkTheme = bodyMobile.classList.contains('dark-theme');
    toggleButtonMobile.innerHTML = isDarkTheme
        ? '<i class="fas fa-moon"></i> Dark'
        : '<i class="fa-solid fa-lightbulb"></i> Light';
});


const menuIcon = document.getElementById('navbarIcon');
const closeIcon = document.getElementById('navbarCloseIcon');
const menu = document.getElementById('navbarMobileLinks');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});

closeIcon.addEventListener('click', () => {
    menu.classList.remove('active');
});


