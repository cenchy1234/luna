// Performance optimizations
document.addEventListener('DOMContentLoaded', () => {
    // Lazy load images that are off screen
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Defer non-critical animations
    const deferAnimations = () => {
        document.body.classList.add('animations-ready');
        requestAnimationFrame(() => {
            document.querySelectorAll('.floating-icon').forEach(el => {
                el.style.animation = 'floatIcon 20s linear infinite';
            });
        });
    };

    // Wait for page load
    window.addEventListener('load', () => {
        setTimeout(deferAnimations, 100);
    });
});
