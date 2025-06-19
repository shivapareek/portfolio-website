// Scroll Spy for Active Navbar Link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll", () => {
    let top = window.scrollY;

    sections.forEach((sec) => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => link.classList.remove("active"));
            let activeLink = document.querySelector(`header nav ul li a[href*="${id}"]`);
            if (activeLink) activeLink.classList.add("active");
        }
    });

    if (top === 0) {
        navLinks.forEach((link) => link.classList.remove("active"));
        let homeLink = document.querySelector('header nav ul li a[href="#home"]');
        if (homeLink) homeLink.classList.add("active");
    }
});

// Navbar Toggle for Mobile View
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        console.log("Clicked");
    });
});
