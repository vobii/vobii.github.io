const travelerPrefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

window.onload = function() {
    if (travelerPrefersDarkMode.matches) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
}