let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

const themeButton = document.getElementById("theme-button");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
    themeButton.textContent = savedTheme === "dark-mode" ? "☀" : "🌚";
}

themeButton.addEventListener("click", () => {
    const isDarkMode = body.classList.toggle("dark-mode");
    themeButton.textContent = isDarkMode ? "☀" : "🌚";
    localStorage.setItem("theme", isDarkMode ? "dark-mode" : "");
});

