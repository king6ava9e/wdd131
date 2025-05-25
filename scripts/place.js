// Set current year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date in footer
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

window.addEventListener("DOMContentLoaded", function() {
    // 1. Define static values (match your HTML)
    const temperature = 15; // °C
    const windSpeed = 5;    // km/h

    // 2. One-line windchill function for Celsius
    function calculateWindChill(tempC, windKmh) {
        return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
    }

    // 3. Calculate windchill only if temp <= 10°C and wind > 4.8km/h
    let windchill = "N/A";
    if (temperature <= 10 && windSpeed > 4.8) {
        windchill = calculateWindChill(temperature, windSpeed).toFixed(1) + "°C";
    }

    // 4. Display result in the Weather section
    document.getElementById("windchill").textContent = windchill;
});