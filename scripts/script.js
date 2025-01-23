function handleEnClick() {
    document.querySelector(".languageChange .enLabel").classList.add("active");
    document.querySelector(".languageChange .huLabel").classList.remove("active");
    
    // Hide all HU elements and show EN elements
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
    
    // Hide all EN elements and show HU elements
    document.querySelectorAll("[data-en]").forEach((element) => {
        element.style.display = "none";
    });
    document.querySelectorAll("[data-hu]").forEach((element) => {
        element.style.display = "";
    });
}

function handleNavClick(event) {
    // Add active class to clicked navigation item and remove from others
    const navItems = document.querySelectorAll(".navbar-links > div");
    navItems.forEach((item) => {
        item.classList.remove("navActive");
    });
    event.target.classList.add("navActive");
}

// Set default language (optional)
document.addEventListener("DOMContentLoaded", () => {
    handleEnClick(); // Default to English
});


const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

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
