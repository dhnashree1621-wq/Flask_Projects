function startWordExplosion(text) {
    const area = document.getElementById("fall-area");
    area.innerHTML = "";

    const words = text.split(/\s+/);
    const centerX = area.clientWidth / 2;
    const centerY = area.clientHeight / 2;

    words.forEach(word => {
        const span = document.createElement("span");
        span.className = "word-explode";
        span.textContent = word;

        // Set initial position at center
        span.style.left = centerX + "px";
        span.style.top = centerY + "px";

        // Random font size
        span.style.fontSize = (14 + Math.random() * 6) + "px";

        area.appendChild(span);

        // Random explosion direction and speed
        const angle = Math.random() * 2 * Math.PI;
        const distance = 150 + Math.random() * 200; // how far it moves
        const rotate = (Math.random() - 0.5) * 360; // rotation
        const duration = 8000 + Math.random() * 2000; // 8–10 seconds

        const startTime = performance.now();

        function animate(time) {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Position along the vector
            const x = centerX + Math.cos(angle) * distance * progress;
            const y = centerY + Math.sin(angle) * distance * progress;

            span.style.left = x + "px";
            span.style.top = y + "px";

            // Rotation
            span.style.transform = `rotate(${rotate * progress}deg)`;

            // Slow fade: stays visible longer
            span.style.opacity = 1 - 0.5 * progress;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                span.style.opacity = 0.5; // keep at 50% opacity at final spot
            }
        }

        requestAnimationFrame(animate);
    });
}
