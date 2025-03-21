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
        updateDividerVisibility();
    }

    checkScreenSize();
    
    window.addEventListener("resize", checkScreenSize);
});
