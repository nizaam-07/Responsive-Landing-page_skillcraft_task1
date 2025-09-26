    // Get the header element
const header = document.getElementById('main-header');

// Listen for the scroll event on the window
window.addEventListener('scroll', () => {
    // If the vertical scroll position is greater than 50 pixels
    if (window.scrollY > 50) {
        // Add the 'scrolled' class to the header
        header.classList.add('scrolled');
    } else {
        // Otherwise, remove the 'scrolled' class
        header.classList.remove('scrolled');
    }
});