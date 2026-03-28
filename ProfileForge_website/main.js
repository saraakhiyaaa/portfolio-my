document.addEventListener('DOMContentLoaded', () => {
    console.log('Akhiyaa Portfolio Loaded');

    // Splash Screen Logic
    const splashScreen = document.getElementById('splash-screen');
    const app = document.getElementById('app');

    if (splashScreen) {
        splashScreen.addEventListener('click', () => {
            splashScreen.classList.add('fade-out');
            app.classList.add('visible-app');
        });
    }

    // Custom Cursor Logic
    const cursor = document.getElementById('custom-cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, .placeholder-item, .splash-screen');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.content-section').forEach(section => {
        observer.observe(section);
    });
});
