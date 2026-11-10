
// Get button and system theme preference
const btn = document.querySelector("button");
const themePreference = window.matchMedia("(prefers-color-scheme: dark)");

// Function to apply theme
function applyTheme(theme) {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
}

// Load saved theme or system preference
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme(themePreference.matches ? "dark" : "light");
}

// Listen for system theme changes
themePreference.addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
        applyTheme(themePreference.matches ? "dark" : "light");
    }
});

// Toggle theme on button click
btn.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark")
        ? "light"
        : "dark";

    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});

