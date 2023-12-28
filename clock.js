function updateLouisvilleTime() {
    var louisvilleOffset = -6; // Louisville is UTC-5 in Eastern Standard Time
    var daylightSaving = true; // Set to true if daylight saving time is in effect

    // Adjust for daylight saving time
    if (daylightSaving) {
        louisvilleOffset += 1;
    }

    // Get the current time in UTC
    var now = new Date();
    var currentUtcTime = now.getTime() + now.getTimezoneOffset() * 60000;

    // Convert UTC time to Louisville time
    var louisvilleTime = new Date(currentUtcTime + 3600000 * louisvilleOffset);

    // Format the time
    var formattedTime = louisvilleTime.toLocaleTimeString('en-US', { timeZone: 'America/Kentucky/Louisville' });

    // Display the time
    document.getElementById('louisvilleTime').textContent = formattedTime;
}

// Update the time every second
setInterval(updateLouisvilleTime, 1000);

// Initialize on load
updateLouisvilleTime();
