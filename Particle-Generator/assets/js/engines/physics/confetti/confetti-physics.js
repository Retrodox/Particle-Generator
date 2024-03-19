import { shapes } from "../../spawners/confetti/confetti-spawner.js";

export function confettiPhysics() {
  console.log("Confetti Physics Loaded!");
  confettiThrust();
  gravity();
}

function confettiThrust(timestamp) {
  requestAnimationFrame(confettiThrust);

  let box = document.getElementById('transparent-box');
  let boxRect = box.getBoundingClientRect();

  shapes.forEach((shape, index) => {
    if (!shape.velocity) {
      shape.velocity = { x: Math.random() * 5, y: Math.random() * 5 };
    }

    let posX = parseFloat(shape.style.left);
    posX += shape.velocity.x;
    shape.velocity.x *= 0.99;  // Exponential decay
    shape.style.left = `${posX}px`;

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
