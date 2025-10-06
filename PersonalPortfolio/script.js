// Simple mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');

  const icon = menuBtn.querySelector('i');
  if (navMenu.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    const icon = menuBtn.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  });
});

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop - 70,
      behavior: 'smooth'
    });
  });
});

// Simple scroll effect for navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
  }
});

// Simple fade-in animation for sections
function checkScroll() {
  const sections = document.querySelectorAll('section');
  const windowHeight = window.innerHeight;
  
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    
    if (sectionTop < windowHeight - 100) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
}

// Set initial state for sections (except hero)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('section').forEach(section => {
    if (section.id !== 'hero') {
      section.style.opacity = '0.7';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    }
  });
  
  // Check scroll position on load
  checkScroll();
});

window.addEventListener('scroll', checkScroll);

// Disable coming soon project links
document.querySelectorAll('.project-link.disabled').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
  });
});