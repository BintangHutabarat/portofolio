// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Simple loading screen
window.addEventListener('load', function() {
    console.log('Page fully loaded');
    
    // Remove any loading screen if exists
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const toTopBtn = document.getElementById('toTop');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button
    if (toTopBtn) {
        toTopBtn.classList.toggle('show', window.scrollY > 400);
    }
});

// Back to top functionality
const toTopBtn = document.getElementById('toTop');
if (toTopBtn) {
    toTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('JavaScript loaded successfully');