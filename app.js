document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const aMenu = document.querySelector('.aMenu');
  
    if (hamburger && aMenu) { // Ensure elements exist before adding event listener
      hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active'); // Toggle the 'active' class
        console.log("Toggle");
  
        if (aMenu.style.display === 'block') {
          aMenu.style.display = 'none';
        } else {
          aMenu.style.display = 'block';
        }
      });
    } else {
      console.error("Error: Elements not found! Make sure .hamburger-menu and .nav-menu exist in the HTML.");
    }
  });