console.log("JavaScript file loaded");
// Selecting all images with the class 'imgmag'
var images = document.querySelectorAll('.imgmag');

images.forEach(function(img) {
    img.addEventListener('click', function() {
        // Toggle the 'magnify' class on click
        this.classList.toggle('magnify');

        // Find the msg element for this image and toggle its visibility
        var msg = this.nextElementSibling; // This assumes the msg div immediately follows the image
        if (this.classList.contains('magnify')) {
            msg.style.display = 'block'; // show msg
        } else {
            msg.style.display = 'none'; // hide msg
        }
    });
});
