document.addEventListener('mousemove', (e) => {
    const parallaxItems = document.querySelectorAll('[data-parallax]');
    
    parallaxItems.forEach(item => {
        const speed = item.getAttribute('data-parallax-speed') || 0.1;
        const x = (window.innerWidth / 2 - e.pageX) * speed;
        const y = (window.innerHeight / 2 - e.pageY) * speed;
        
        item.style.transform = `translateX(${x}px) translateY(${y}px) var(--depth-${item.getAttribute('data-depth') || '1'})`;
    });
});

// Add smooth transition on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    gsap.from('.hero-image-wrapper', {
        duration: 1.5,
        y: 100,
        rotation: 5,
        opacity: 0,
        ease: 'power3.out'
    });
});
