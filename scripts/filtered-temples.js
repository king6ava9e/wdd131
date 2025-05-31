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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg "
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004, January,11",
    area: 17500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
  },
  {
    templeName: "Madrid Spain Temple",
    location: "Madrid Spain",
    dedicated: "1999, March. 19-21",
    area : 45800,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/madrid-spain/400x250/madrid-spain-mormon-temple-1075592-wallpaper.jpg"
  },
  {
    templeName:"London England Temple",
    location: "Surrey, England",
    dedicated: "1992, October, 18-20",
    area: 42652,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/400x250/london-england-temple-lds-650239-wallpaper.jpg"
  },
  {
    templeName: "Copenhagen Denmark Temple",
    location: "Frederiksberg Denmark",
    dedicated: "2004, May, 23",
    area :  25000,
    imageUrl : 
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/copenhagen-denmark/400x250/copenhagen-denmark-temple-lds-278232-wallpaper.jpg" 
  },
  {
    templeName: "Paris France Temple",
    location: "Le Chesnay France",
    dedicated : "2017, May, 21",
    area :  44175,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-exterior-1905503.jpg"
  }
];

const cardsContainer = document.getElementById("temple-cards");

// Rendering function
function renderTemples(templeArray) {
  cardsContainer.innerHTML = "<h1>Temple Gallery</h1>";
  templeArray.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    const img = document.createElement("img");
    img.src = temple.imageUrl.trim();
    img.alt = temple.templeName + " Temple";
    img.loading = "lazy";

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);

    cardsContainer.appendChild(card);
  });
}

// Initial render (Home)
renderTemples(temples);

// Filtering functions
function filterOld() {
  renderTemples(temples.filter(t => {
    const year = parseInt(t.dedicated.match(/\d{4}/));
    return year < 1900;
  }));
}
function filterNew() {
  renderTemples(temples.filter(t => {
    const year = parseInt(t.dedicated.match(/\d{4}/));
    return year > 2000;
  }));
}
function filterLarge() {
  renderTemples(temples.filter(t => t.area > 90000));
}
function filterSmall() {
  renderTemples(temples.filter(t => t.area < 10000));
}

// Event listeners for nav
document.getElementById("home-link").addEventListener("click", e => { e.preventDefault(); renderTemples(temples); });
document.getElementById("old-link").addEventListener("click", e => { e.preventDefault(); filterOld(); });
document.getElementById("new-link").addEventListener("click", e => { e.preventDefault(); filterNew(); });
document.getElementById("large-link").addEventListener("click", e => { e.preventDefault(); filterLarge(); });
document.getElementById("small-link").addEventListener("click", e => { e.preventDefault(); filterSmall(); });