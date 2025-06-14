// Set current year
const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Set last modified date
const lastMod = document.getElementById("lastModified");
if (lastMod) {
    lastMod.textContent = "Last Modified: " + document.lastModified;
}

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('open');
        });
    }
});

// gallerty sorting
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryCards = document.querySelectorAll('.gallery-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove 'active' from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            galleryCards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// testimonial
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonials-carousel .testimonial');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let testimonialIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((t, i) => {
            t.classList.toggle('active', i === index);
        });
    }

    if (prevBtn && nextBtn && testimonials.length) {
        prevBtn.addEventListener('click', () => {
            testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(testimonialIndex);
        });

        nextBtn.addEventListener('click', () => {
            testimonialIndex = (testimonialIndex + 1) % testimonials.length;
            showTestimonial(testimonialIndex);
        });

        showTestimonial(testimonialIndex);
    }
});

// gallery part
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = [
        {
            src: "images/Modern_Home_Exterior.png",
            
            alt: "Modern home exterior",
            caption: "Modern Home Exterior",
            category: "interior"
        },
        {
            src: "images/elgaantlivingroom.png",
           
            alt: "Elegant living room",
            caption: "Elegant Living Room",
            category: "interior"
        },
        {
            src: "images/Pool10b.jpg",
            
            alt: "Swimming pool project",
            caption: "Swimming Pool Project",
            category: "pools"
        },
        {
             src: "images/interiordesign.webp",
        alt: "Interior design project",
        caption: "Interior Design",
        category: "interior"
        },
        {
            src: "images/painting_small.jpg",
        alt: "Interior design project",
        caption: "Painting & Finishing",
        category: "painting"
        },
        {
            src: "images/finishedplumbing.jpg",
        alt: "Plumbing and polytank cleaning",
        caption: "Plumbing Solutions",
        category: "plumbing"
        },
        {
            src: "images/pop7.jpg",
        alt: "POP ceiling installation",
        caption: "POP Ceilings",
        category: "pop"
        },
        {
             src: "images/ploytank.jpg",
        alt: "Plumbing and polytank cleaning",
        caption: "Cleansed Polytank",
        category: "pools"
        },
        {
            src: "images/constructedhouse.jpeg",
        alt: "General construction project",
        caption: "General Construction",
        category: "construction"
        },
        {
            src: "images/painting2.jpg",
        alt: "Professional painting service",
        caption: "Painting & Finishing",
        category: "painting"
        },
        {
             src: "images/pop5.jpg",
        alt: "POP ceiling installation",
        caption: "POP Ceilings",
        category: "pop"
        },
        {
            src: "images/plumbing2.png",
        alt: "Plumbing and polytank cleaning",
        caption: "Plumbing Solutions",
        category: "plumbing"
        }

        // Add more images as needed...
    ];

    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid) {
        galleryGrid.innerHTML = galleryImages.map(img => `
            <div class="gallery-card">
                <picture>
                    <source srcset="${img.src}" media="(min-width: 900px)">
                    <source srcset="${img.srcMedium}" media="(min-width: 600px)">
                    <img src="${img.srcSmall}" alt="${img.alt}">
                </picture>
                <div class="gallery-caption">${img.caption}</div>
            </div>
        `).join('');
    }
});

function renderGallery(filter = 'all') {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;
    let filtered = galleryImages;
    if (filter !== 'all') {
        filtered = galleryImages.filter(img => img.category === filter);
    }
    galleryGrid.innerHTML = filtered.map(img => `
        <div class="gallery-card">
            <img src="${img.src}" alt="${img.alt}">
            <div class="gallery-caption">${img.caption}</div>
        </div>
    `).join('');
};

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default navigation
            const target = this.getAttribute('href');
            window.location.href = target; // Navigate to the page
        });
    });
});

// Save the current page to localStorage
localStorage.setItem('lastVisited', window.location.pathname);

// Get the last visited page from localStorage
const lastVisited = localStorage.getItem('lastVisited');
if (lastVisited && lastVisited !== window.location.pathname) {
    // Example: highlight the nav link
    const navLink = document.querySelector(`.main-nav a[href="${lastVisited}"]`);
    if (navLink) {
        navLink.classList.add('last-visited');
    }
    // Or show a message
    // alert(`Welcome back! Last time you visited: ${lastVisited}`);
}