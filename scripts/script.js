document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const navDivider = document.getElementById("nav-divider");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        updateDividerVisibility();
    });

    function updateDividerVisibility() {
        if (navLinks.classList.contains("active") || window.innerWidth <= 768) {
            navDivider.style.display = "none";
        } else {
            navDivider.style.display = "block";
        }
    }

    function checkScreenSize() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
        }
        updateDividerVisibility();
    }

    updateDividerVisibility();
    window.addEventListener("resize", checkScreenSize);

    const darkModeToggle = document.getElementById("dark-mode-toggle");

    const savedDarkMode = localStorage.getItem("darkMode") === "true";

    if (savedDarkMode) {
        document.body.classList.add("dark-mode");
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener("change", () => {
        if (darkModeToggle.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "true");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "false");
        }
    });
});
