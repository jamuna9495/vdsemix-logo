document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('clutter-overlay');
    const scene = document.getElementById('scene');

    // Create "Clutter" particles that visually connect the V-shape
    function generateClutter(xStart, yStart, xEnd, yEnd, density) {
        for (let i = 0; i < density; i++) {
            const dot = document.createElement('div');
            dot.className = 'particle';
            
            const t = i / density;
            // Adds random clutter/scatter around the path
            const scatterX = (Math.random() - 0.5) * 50;
            const scatterY = (Math.random() - 0.5) * 50;
            const scatterZ = (Math.random() - 0.5) * 200;

            const x = xStart + (xEnd - xStart) * t + scatterX;
            const y = yStart + (yEnd - yStart) * t + scatterY;

            dot.style.width = (Math.random() * 3) + 'px';
            dot.style.height = dot.style.width;
            dot.style.left = x + 'px';
            dot.style.top = y + 'px';
            dot.style.transform = `translateZ(${scatterZ}px)`;
            
            overlay.appendChild(dot);
        }
    }

    // Connecting Moon to Earth
    generateClutter(100, 100, 300, 350, 80);
    // Connecting Earth to Sun
    generateClutter(300, 350, 500, 100, 80);

    // Dynamic 3D Interaction
    document.addEventListener('mousemove', (e) => {
        const xRotate = (window.innerWidth / 2 - e.pageX) / 25;
        const yRotate = (window.innerHeight / 2 - e.pageY) / 25;
        scene.style.transform = `rotateY(${xRotate}deg) rotateX(${-yRotate}deg)`;
    });
});
