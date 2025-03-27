document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links"); 
    const menuIcon = menuToggle.querySelector("i");
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    function toggleMenu() {
        navLinks.classList.toggle("active");
        menuIcon.classList.toggle("fa-bars");
        menuIcon.classList.toggle("fa-times");
    }

    menuToggle.addEventListener("click", toggleMenu);

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
            menuIcon.classList.add("fa-bars");
            menuIcon.classList.remove("fa-times");
        }
    });

    if (darkModeToggle) {
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
    }

    document.getElementById("reset-data").addEventListener("click", function () {
        if (confirm("Are you sure you want to reset all data? This action cannot be undone.")) {
            localStorage.clear();
            alert("All data has been reset.");
            window.location.href = "home.html";
        }
    });
});
