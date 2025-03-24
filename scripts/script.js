document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const navDivider = document.getElementById("nav-divider");
    const menuIcon = menuToggle.querySelector("i");
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    function updateDividerVisibility() {
        navDivider.style.display = (window.innerWidth <= 768) ? "none" : "block";
    }

    function toggleMenuIcon() {
        menuIcon.classList.toggle("fa-bars");
        menuIcon.classList.toggle("fa-times");
    }

    function checkScreenSize() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
            navDivider.style.display = "block";
        } else {
            navLinks.classList.remove("active");
            navDivider.style.display = "none";
        }
        updateDividerVisibility();
    }

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

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        updateDividerVisibility();
        toggleMenuIcon();
    });
});
