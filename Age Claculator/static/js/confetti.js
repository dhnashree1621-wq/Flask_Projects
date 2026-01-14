const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

for (let i = 0; i < 800; i++) {
    pieces.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 1000,
        size: Math.random() * 8 + 4,
        speed: Math.random() * 3 + 2,
        color: `hsl(${Math.random() * 360}, 100%, 60%)`
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);

        p.y -= p.speed;

        if (p.y < -20) {
            p.y = canvas.height + Math.random() * 400;
        }
    });

    requestAnimationFrame(animate);
}

animate();
