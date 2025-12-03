// Initialize Animations
AOS.init({
    duration: 1000,
    once: true
});

// Mobile Menu
const toggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

if (toggle) {
    toggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Change icon
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
