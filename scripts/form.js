// Set current year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date in footer
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;


const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// ...existing code...

// Populate Product Name select options
const productSelect = document.getElementById("Product");
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// ...existing code...

// On review.html, increment and display review counter
if (window.location.pathname.endsWith("review.html")) {
    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
    reviewCount += 1;
    localStorage.setItem("reviewCount", reviewCount);

    // Optionally display the count on the page if you have an element for it
    const counterDisplay = document.getElementById("reviewCounter");
    if (counterDisplay) {
        counterDisplay.textContent = `You have submitted ${reviewCount} review(s).`;
    }
}