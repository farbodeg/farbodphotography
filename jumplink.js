// Get the jump link element
var jumpLink = document.getElementById('jumplink');

// Add an event listener to the window for the 'scroll' event
window.addEventListener('scroll', function() {
    // Get the current scroll position
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the scroll position is at the top of the page
    if (scrollPosition === 0) {
        // Hide the jump link
        jumpLink.style.display = 'none';
    } else {
        // Show the jump link when not at the top
        jumpLink.style.display = 'block';
    }
});

// Hide the link initially if the page loads at the top
if(window.pageYOffset || document.documentElement.scrollTop === 0) {
    jumpLink.style.display = 'none';
}
