import { shapes } from "../../spawners/fire/fire-spawner.js";

let lastFrameTime = Date.now();

export function firePhysics() {
    console.log("Fire physics loaded!");
    fireMovement();
}

function calculateDeltaTime() {
    const currentTime = Date.now();
    const deltaTime = (currentTime - lastFrameTime) / 1000; // Delta time in seconds
    lastFrameTime = currentTime;
    return deltaTime;
}

function initializeVelocity(shape) {
    if (!shape.velocity) {
        shape.velocity = {
            x: Math.random() * 15 - 7.5, // Horizontal velocity
            y: -(Math.random() * 4 + 3.7)  // Make sure this is always negative for upward movement
        };
    }
}

function initializeWaveProperties(shape) {
    if (!shape.wave) {
        shape.wave = {
            // Random start angle for variety in the wave pattern
            angle: Math.random() * Math.PI * 2,
            amplitude: 0.05, // Max number of pixels the particle will move left/right
            frequency: 0.05 // The speed of the sine wave cycle
        };
    }
}

function updateParticleTTL(currentTime, shape, index) {
    if (!shape.creationTime) {
        shape.creationTime = currentTime; // Assign the creation time if not already assigned
    }

    let timeAlive = currentTime - shape.creationTime;

    // Check if the particle's life exceeds its TTL
    if (timeAlive > shape.timeToLive) {
        shape.remove();
        shapes.splice(index, 1);
        return true; // Indicates that the particle was removed
    }

    // Decide randomly which yellow particles will shrink
    if (!shape.shrinking) {
        shape.shrinking = Math.random() < 0.5; // 50% chance to shrink
    }

    // Apply shrinking to selected particles
    if (!shape.shrinking) {
        let shrinkRate = shape.colorChanged ? 1 : 2; // Adjust shrink rates as needed
        let currentSize = parseInt(shape.style.width);
        shape.style.width = `${Math.max(0, currentSize - shrinkRate)}px`;
        shape.style.height = `${Math.max(0, currentSize - shrinkRate)}px`;
    }

    // Decide randomly which yellow particles will change color
    if (!shape.colorChangeDecisionMade) {
        shape.colorChangeDecisionMade = true;
        shape.willChangeColor = Math.random() < 0.75; // 75% chance to change color
    }

    // Check if the particle has been alive for more than x seconds and eligible to change color
    shape.timeToChangeColor = shape.timeToChangeColor || Math.random() * (1750 - 1500) + 1500;
    if (timeAlive > shape.timeToChangeColor && shape.willChangeColor) {
        // Change the color and set starting opacity if it hasn't been changed already
        if (!shape.colorChanged) {
            shape.style.backgroundImage = "none";
            shape.style.backgroundColor = "#848884";
            shape.style.opacity = "0.70"; // Set starting opacity to 70%
            shape.colorChanged = true;
            shape.opacityDecreaseTime = currentTime; // Set the time when we start decreasing opacity
        } else {
            // Slower opacity decrease for smoke particles
            let newOpacity = parseFloat(shape.style.opacity) - 0.005; // Slower decrease rate
            shape.style.opacity = Math.max(newOpacity, 0);
        }
    }

    // Remove the particle if its size or opacity reaches 0
    let currentSize = parseInt(shape.style.width);
    if (currentSize <= 0 || parseFloat(shape.style.opacity) <= 0) {
        shape.remove();
        shapes.splice(index, 1);
        return true; // Indicates that the particle was removed
    }

    return false; // Indicates that the particle was not removed
};

function fireMovement() {
    requestAnimationFrame(fireMovement);
    const deltaTime = calculateDeltaTime();
    let box = document.getElementById('transparent-box');
    let boxRect = box.getBoundingClientRect();

    for (let index = shapes.length - 1; index >= 0; index--) {
        let shape = shapes[index];
        initializeVelocity(shape);
        initializeWaveProperties(shape);

        if (updateParticleTTL(Date.now(), shape, index)) {
            continue;
        }

        const curveDuration = 1750; // Time in milliseconds to curve towards click point
        const currentTime = Date.now();

        // Determine if the particle is still in the curving phase
        let isCurving = (currentTime - shape.creationTime) < curveDuration;

        // Calculate horizontal movement
        let targetX = shape.targetX; // Corrected to use shape.targetX
        let currentX = parseFloat(shape.style.left);
        let direction = targetX > currentX ? 1 : -1; // Determine direction to move
        let horizontalDistance = Math.abs(targetX - currentX); // Calculate the horizontal distance to the target
        let horizontalSpeed = Math.min(0.5 * horizontalDistance, 10) * direction;

        shape.velocity.x += horizontalSpeed * deltaTime; // Adjust horizontal velocity
        shape.velocity.x *= Math.pow(0.99, deltaTime); // Apply damping to the horizontal velocity
        let posX = currentX + shape.velocity.x * deltaTime;
        shape.style.left = `${posX}px`;

        // Update vertical movement
        if (isCurving) {
            // Slower upward movement while curving
            shape.velocity.y += (-25 * deltaTime) * 2;
        } else {
            // Normal upward movement after curving phase
            shape.velocity.y += (-50 * deltaTime) * 2;
        }
        let posY = parseFloat(shape.style.top) + (shape.velocity.y * deltaTime);
        shape.style.top = `${posY}px`;

        // Check if the shape is out of bounds and remove it if so
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
    }
};