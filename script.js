// Fade-in animation
document.body.style.opacity = 0;
setTimeout(() => {
    document.body.style.transition = "opacity 1.5s";
    document.body.style.opacity = 1;
}, 100);

// Dark mode toggle
let dark = false;
document.getElementById("toggleTheme").onclick = () => {
    dark = !dark;
    document.body.classList.toggle("dark-mode");

    document.getElementById("toggleTheme").innerHTML = dark ? "🌙" : "☀";
};
