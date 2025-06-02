const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
const cursorDot = document.createElement('div');
cursorDot.className = 'cursor-dot';
cursor.appendChild(cursorDot);
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3
    });
});

const handleMouseEnter = () => cursor.classList.add('cursor-hover');
const handleMouseLeave = () => cursor.classList.remove('cursor-hover');

document.querySelectorAll('a, button, .collab-card').forEach(el => {
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);
});
