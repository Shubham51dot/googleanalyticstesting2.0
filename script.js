const hamburgerBtn = document.querySelector('.hamburger-menu-btn');
const navLinks = document.querySelector('.nav-links');

hamburgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Toggle active class on click
});
