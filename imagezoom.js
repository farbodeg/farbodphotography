document.addEventListener('DOMContentLoaded', function () {
    // Select all images inside list items
    const images = document.querySelectorAll('li img');
    
    // Add click event listener to each image
    images.forEach(image => {
      image.addEventListener('click', function () {
        // If the image is already magnified, remove the magnified class
        if (image.classList.contains('magnified')) {
          image.classList.remove('magnified');
          const note = document.querySelector('.zoom-note');
          if (note) note.remove();
        } else {
          // Ensure only one image is zoomed in at a time
          images.forEach(img => img.classList.remove('magnified'));
          // Add magnified class to the clicked image
          image.classList.add('magnified');
          // Adjust image position to fit the page
          image.scrollIntoView({ behavior: 'smooth', block: 'center' });
          
          // Add a note to instruct user to click again to zoom out
          let note = document.createElement('div');
          note.className = 'zoom-note';
          note.innerText = 'You have to click again to go back to the normal size';
          note.style.position = 'fixed';
          note.style.top = '10px';
          note.style.left = '50%';
          note.style.transform = 'translateX(-50%)';
          note.style.backgroundColor = 'white';
          note.style.color = 'black';
          note.style.padding = '10px';
          note.style.borderRadius = '5px';
          note.style.zIndex = '1001';
          document.body.appendChild(note);
        }
      });
    });
  
    // Adjust the zoom level by modifying CSS dynamically with a smooth zoom effect
    const style = document.createElement('style');
    style.innerHTML = `
      .magnified {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1.1) !important;
        max-width: 90vw;
        max-height: 90vh;
        z-index: 1000;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        transition: transform 0.4s ease-in-out;
      }
    `;
    document.head.appendChild(style);
  });