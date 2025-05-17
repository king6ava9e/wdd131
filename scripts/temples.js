
// Set current year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date in footer
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("hidden");
    // Toggle hamburger and X icon
    if (navMenu.classList.contains("hidden")) {
        menuBtn.innerHTML = "&#9776;"; // Hamburger
    } else {
        menuBtn.innerHTML = "&times;"; // X
    }
});

// Optional: Ensure nav is always visible on large screens
window.addEventListener("resize", function () {
    if (window.innerWidth >= 700) {
        navMenu.classList.remove("hidden");
        menuBtn.innerHTML = "&#9776;";
    } else {
        navMenu.classList.add("hidden");
        menuBtn.innerHTML = "&#9776;";
    }
});