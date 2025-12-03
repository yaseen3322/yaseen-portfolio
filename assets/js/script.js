// Initialize Animations
AOS.init({
    duration: 800, // Faster animation for mobile
    once: true,
    disable: 'mobile' // Optional: Disable animations on phone if it's lagging
});

// Mobile Menu Logic
const toggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (toggle) {
    toggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Toggle Icon between Bars and Times (X)
        const icon = toggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = toggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});
