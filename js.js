 // Navbar scroll effect
 const navbar = document.getElementById('navbar');
 window.addEventListener('scroll', () => {
   if (window.scrollY > 50) {
     navbar.classList.add('scrolled');
   } else {
     navbar.classList.remove('scrolled');
   }
 });

 // Mobile menu toggle
 const hamburger = document.getElementById('hamburger');
 const menu = document.getElementById('menu');

 hamburger.addEventListener('click', () => {
   menu.classList.toggle('open');
 });

 // Close menu after clicking a link (mobile)
 document.querySelectorAll('.menu a').forEach(link => {
   link.addEventListener('click', () => {
     menu.classList.remove('open');
   });
 });