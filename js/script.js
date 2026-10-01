document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // AUTO-UPDATE COPYRIGHT YEAR
    // ==========================================
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ==========================================
    // MOBILE MENU TOGGLE SCRIPT
    // ==========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const siteNav = document.querySelector('.site-navigation');

    if (menuToggle && siteNav) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            siteNav.classList.toggle('nav-active');
        });

        // Close mobile menu when clicking any navigation link
        const navLinks = siteNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                siteNav.classList.remove('nav-active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});