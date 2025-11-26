let farStars = [];
let nearStars = [];

function drawBackground() {
    background("#0f1011ff");

    noStroke();
    fill(255);

    for (let star of farStars) {
        star.x += star.speed + asteroid.speed/2;
        if (star.x > width) {
            star.x = 0;
            star.y = random(height);
        }
        ellipse(star.x, star.y, star.size);
    }

    for (let star of nearStars) {
        star.x += star.speed + asteroid.speed/2;
        if (star.x > width) {
            star.x = 0;
            star.y = random(height);
        }
        ellipse(star.x, star.y, star.size);
    }
}
