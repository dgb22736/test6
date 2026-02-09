/**
 * Demo Website — Main JavaScript
 * Handles mobile navigation and form validation.
 */

document.addEventListener("DOMContentLoaded", function () {

    // Mobile nav toggle
    const navLinks = document.querySelector(".nav-links");
    const navBrand = document.querySelector(".nav-brand");

    if (navBrand && navLinks) {
        navBrand.addEventListener("click", function () {
            navLinks.classList.toggle("nav-open");
        });
    }

    // Contact form validation
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            var name = document.getElementById("name").value.trim();
            var email = document.getElementById("email").value.trim();
            var message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                return;
            }

            if (!isValidEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert("Thank you, " + name + "! Your message has been sent.");
            form.reset();
        });
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
