// ===== GNOME TERMINAL PORTFOLIO =====

// Initialize AOS
AOS.init({
    duration: 600,
    once: true,
    offset: 50,
    easing: 'ease-out'
});

// Loading screen
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 800);
    }
});

// Active tab highlighting
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        const tabPath = tab.getAttribute('href');
        if (currentPath.includes(tabPath) || (currentPath === '/' && tabPath === 'index.html')) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
});

// Keyboard shortcut for focus
document.addEventListener('keydown', function(e) {
    // Press '/' to focus on search or input
    if (e.key === '/' && !e.target.matches('input, textarea')) {
        e.preventDefault();
        console.log('Terminal ready for input');
    }
});

// Terminal typing effect (optional - can be enabled)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Smooth scroll behavior for all internal links
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

// Add hover sound effect (optional - requires audio files)
function playHoverSound() {
    // Add hover sound logic here if desired
    console.log('Hover effect triggered');
}

// Console easter egg
console.log('%cGNOME Terminal Portfolio', 'font-size: 20px; font-weight: bold; color: #8137f2;');
console.log('%cBuilt by Bintang Hutabarat', 'font-size: 12px; color: #888;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #8137f2;');
console.log('%cAvailable commands:', 'font-weight: bold; color: #8137f2;');
console.log('%c  • about()     - View profile', 'color: #888;');
console.log('%c  • skills()    - View tech stack', 'color: #888;');
console.log('%c  • contact()   - Get in touch', 'color: #888;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #8137f2;');

// Easter egg functions
window.about = function() {
    console.log('Name: Bintang Bennaya Hasiholan Hutabarat');
    console.log('Role: Full Stack Web Developer & Cybersecurity Enthusiast');
    console.log('Location: Indonesia');
};

window.skills = function() {
    console.log('Frontend: React, Next.js, Vue.js, TailwindCSS');
    console.log('Backend: Laravel, Node.js, Express.js, FastAPI');
    console.log('Database: MySQL, MongoDB, PostgreSQL');
    console.log('Cloud: AWS, Docker, Kubernetes');
    console.log('Security: Penetration Testing, Network Security, Linux');
};

window.contact = function() {
    console.log('LinkedIn: https://linkedin.com/in/bintang-bennaya');
    console.log('GitHub: https://github.com/KuyangC');
    console.log('Email: bintang@example.com');
};

console.log('Portfolio loaded successfully!', 'color: #26a269; font-weight: bold;');
