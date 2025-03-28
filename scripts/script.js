// Executes Script after Page is fully loaded   
document.addEventListener("DOMContentLoaded", function () {
    // Gets references to html elements 
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links"); 
    const menuIcon = menuToggle.querySelector("i");
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    // Toggle menu function toggles css on certain html elements related to the navbar
    function toggleMenu() {
        navLinks.classList.toggle("active");
        menuIcon.classList.toggle("fa-bars");
        menuIcon.classList.toggle("fa-times");
    }

    // Adds click eventlistener elements with id menu-toggle that triggers toggle menu function
    menuToggle.addEventListener("click", toggleMenu);

    // Adds resize event listener that triggers lamda function to remove css from certain html elements related to navbar
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
            menuIcon.classList.add("fa-bars");
            menuIcon.classList.remove("fa-times");
        }
    });

    // Handles Dark Mode Logic 
    if (darkModeToggle) {
        // Saves status of dark mode
        const savedDarkMode = localStorage.getItem("darkMode") === "true";
        // If dark mode is on enable dark mode styles and checks dark mode check box
        if (savedDarkMode) {
            document.body.classList.add("dark-mode");
            darkModeToggle.checked = true;
        }
        // Event listener for dark mode toggle
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
    // Add event lsiter to reset dat button
    document.getElementById("reset-data").addEventListener("click", function () {
        // Asks user if they are sure they want to erase all data
        if (confirm("Are you sure you want to reset all data? This action cannot be undone.")) {
            // CLears local storage
            localStorage.clear();
            alert("All data has been reset.");
            window.location.href = "index.html";
        }
    });
});
