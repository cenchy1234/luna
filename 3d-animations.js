// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Parallax mouse movement
document.addEventListener('mousemove', (e) => {
    const depth = 50;
    const moveX = (e.pageX - window.innerWidth/2) / depth;
    const moveY = (e.pageY - window.innerHeight/2) / depth;

    gsap.to('[data-depth]', {
        x: (i, el) => moveX * el.dataset.depth,
        y: (i, el) => moveY * el.dataset.depth,
        duration: 1,
        ease: 'power2.out'
    });
});

// Scroll animations
gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        y: 100,
        opacity: 0,
        rotateX: 5,
        transformPerspective: 1000
    });
});

// Floating elements animation
gsap.to('.floating-icons svg', {
    y: 20,
    rotation: 10,
    duration: 2,
    ease: 'power1.inOut',
    stagger: {
        each: 0.3,
        repeat: -1,
        yoyo: true
    }
});
