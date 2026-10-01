document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // AUTO-UPDATE COPYRIGHT YEAR
    // ==========================================
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ==========================================
    // MOBILE NAVIGATION TOGGLE
    // ==========================================
    const menuToggle = document.querySelector(".menu-toggle");
    const siteNavigation = document.querySelector(".site-navigation");

    if (menuToggle && siteNavigation) {
        menuToggle.addEventListener("click", () => {
            const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
            
            // Toggle ARIA attributes
            menuToggle.setAttribute("aria-expanded", !isExpanded);
            
            // Toggle visibility / active state
            siteNavigation.classList.toggle("nav-active");
            menuToggle.classList.toggle("toggle-active");
        });

        // Close mobile menu when clicking any navigation link
        const navLinks = siteNavigation.querySelectorAll("a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.setAttribute("aria-expanded", "false");
                siteNavigation.classList.remove("nav-active");
                menuToggle.classList.remove("toggle-active");
            });
        });
    }
});