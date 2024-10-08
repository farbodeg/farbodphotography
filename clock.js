function updateLouisvilleTime() {
    // Get the current time
    var now = new Date();

    // Format the time for Louisville
    var formattedTime = now.toLocaleTimeString('en-US', { timeZone: 'America/Kentucky/Louisville' });

    // Display the time
    document.getElementById('louisvilleTime').textContent = formattedTime;
}

// Update the time every second
setInterval(updateLouisvilleTime, 1000);

// Initialize on load
updateLouisvilleTime();