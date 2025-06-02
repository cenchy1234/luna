document.querySelectorAll('.magnetic-wrap').forEach(wrap => {
    const item = wrap.querySelector('.magnetic-item');
    
    wrap.addEventListener('mousemove', (e) => {
        const rect = wrap.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(item, {
            duration: 0.3,
            x: x * 0.3,
            y: y * 0.3,
            rotation: x * 0.05,
            ease: 'power2.out'
        });
    });
    
    wrap.addEventListener('mouseleave', () => {
        gsap.to(item, {
            duration: 0.3,
            x: 0,
            y: 0,
            rotation: 0
        });
    });
});
