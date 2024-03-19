import { shapes } from "../../spawners/fireworks/firework-spawner.js";

const explosionCounter = {};

export function fireworkPhysics() {
	console.log("Firework Physics Loaded!")
	fireworkThrust();
    gravity();
}

function fireworkThrust(timestamp) {
  requestAnimationFrame(fireworkThrust);

  let box = document.getElementById('transparent-box');
  let boxRect = box.getBoundingClientRect();

  shapes.forEach((shape, index) => {
    if (!shape.velocity) {
      shape.velocity = { x: 0, y: 0 };
    }

    if (!shape.startTime) {
      shape.startTime = timestamp;
    }

    // No action in 'stacked' phase. Directly move to 'upward'
    if (shape.phase === 'stacked') {
      shape.phase = 'upward';
      shape.startTime = timestamp; // Start the timer
    }

    if (shape.phase === 'upward') {
      const fireworkUpwardSound = document.getElementById("fireworkUpwardSound"); //gets fireworkUpwardSound from HTML
      fireworkUpwardSound.play();
      let posY = parseFloat(shape.style.top);
      posY -= 10;
      shape.style.top = `${posY}px`;

      if (timestamp - shape.startTime > 750) { // 0.5 seconds upward
        shape.phase = 'explode';
        fireworkUpwardSound.pause();  // Stops the sound
        fireworkUpwardSound.currentTime = 0;
        const fireworkExplosionSound = document.getElementById("fireworkExplosionSound"); //gets fireworkUpwardSound from HTML
        fireworkExplosionSound.play();
        shape.startTime = timestamp; // Reset timer
        shape.velocity = { x: (Math.random() - 0.5) * 10, y: (Math.random() - 0.5) * 10 }; // Initial velocity for explosion


      }
    }

    if (shape.phase === 'explode') {
      // x position update
      let posX = parseFloat(shape.style.left);
      posX += shape.velocity.x;
      shape.velocity.x *= 0.99;
      shape.style.left = `${posX}px`;

      // y position update
      let posY = parseFloat(shape.style.top);
      posY += shape.velocity.y;
      shape.velocity.y *= 0.99;  // Exponential decay
      shape.velocity.y += 0.1;   // Gravity
      shape.style.top = `${posY}px`;
    }

    // removes out-of-bounds shapes
    let outOfBoundsShape = shape.getBoundingClientRect();
    if (
      outOfBoundsShape.bottom < boxRect.top ||
      outOfBoundsShape.top > boxRect.bottom ||
      outOfBoundsShape.left > boxRect.right ||
      outOfBoundsShape.right < boxRect.left
    ) {
      shape.remove();
      shapes.splice(index, 1);

      if (shape.phase === 'explode') {
           explosionCounter[shape.startTime]--;  // Decrement counter
           if (explosionCounter[shape.startTime] === 0) {  // If no more particles
                const fireworkExplosionSound = document.getElementById("fireworkExplosionSound");
                fireworkExplosionSound.pause();
                fireworkExplosionSound.currentTime = 0;
                delete explosionCounter[shape.startTime];  // Remove this explosion from counter
              }
            }
          }
        });
      }


function gravity(timestamp) {
  requestAnimationFrame(gravity);

  let box = document.getElementById('transparent-box');
  let boxRect = box.getBoundingClientRect();
  const gravityConstant = 0.1;

  shapes.forEach((shape, index) => {
    if (!shape.velocity) {
      shape.velocity = { x: Math.random() * 5, y: Math.random() * 5 };
    }
    shape.velocity.y += gravityConstant;
    let posY = parseFloat(shape.style.top);
    posY += shape.velocity.y;
    shape.style.top = `${posY}px`;


    // Remove if outside box
    let outOfBoundsShape = shape.getBoundingClientRect();
    if (
      outOfBoundsShape.bottom < boxRect.top ||
      outOfBoundsShape.top > boxRect.bottom ||
      outOfBoundsShape.left > boxRect.right ||
      outOfBoundsShape.right < boxRect.left
    ) {
      shape.remove();
      shapes.splice(index, 1);
    }
  });
}