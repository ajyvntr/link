function unwrapGift() {
    document.getElementById("giftBox").style.transform = "scale(0)";
    
    setTimeout(() => {
        document.getElementById("message").style.opacity = 1;
        document.getElementById("message").innerText = "Merry Christmas! 🎄🎉";
        
        startConfetti();
        
        document.getElementById("santaContainer").style.display = "block";
    }, 500);
}

function startConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiColors = ['#FF0000', '#008000', '#FFFFFF', '#FFD700'];
    const confettiCount = 200;
    let confettiArray = [];

    for (let i = 0; i < confettiCount; i++) {
        confettiArray.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
            size: Math.random() * 10 + 5,
            speedX: Math.random() * 4 - 2,
            speedY: Math.random() * 4 + 2,
        });
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confettiArray.forEach((confetto) => {
            ctx.beginPath();
            ctx.arc(confetto.x, confetto.y, confetto.size, 0, Math.PI * 2);
            ctx.fillStyle = confetto.color;
            ctx.fill();

            confetto.x += confetto.speedX;
            confetto.y += confetto.speedY;

            if (confetto.y > canvas.height) {
                confetto.y = -confetto.size;
                confetto.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(animateConfetti);
    }

    animateConfetti();
}
