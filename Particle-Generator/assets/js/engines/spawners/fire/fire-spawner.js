import { buttonSelection, selectedButtonId } from '../../../toolbar/buttons/button-selection.js';

export let shapes = [];  // Declare and export shapes array

buttonSelection();

document.addEventListener("DOMContentLoaded", function () {
    buttonSelection();
    spawnFire();
});

let lastClickTime = 0;

export function spawnFire() {
    console.log("fire loaded");
    // Only attach the event listener if it hasn't been attached before
    if (!window.fireEventListenerAdded) {
        window.fireEventListenerAdded = true;
        document.addEventListener("click", function (event) {
            let now = new Date().getTime();
            let box = document.getElementById('transparent-box');

            if (box === null) {
                console.log("Transparent Box does not exist");
                return;
            }

            if (box.contains(event.target) && selectedButtonId === "fire-btn") {
                if (now - lastClickTime >= 1000 || lastClickTime === 0) {
                    lastClickTime = now;
                    createShape(event);  // This should only be called once per click
                }
            }
        });
    }
}

function createShape(event) {
    let particleCount = 100; // Number of particles to spawn
    let particlesSpawned = 0; // Counter for spawned particles
    let baseWidth = 85; // Width of the fire base in pixels

    let spawningInterval = setInterval(() => {
        if (particlesSpawned < particleCount) {
            let shape = document.createElement("div");
            shape.style.width = "8px";
            shape.style.height = "8px";
            shape.style.borderRadius = "50%";
            shape.style.position = "absolute";

            // Randomly decide the color of the particle
            let colorChance = Math.random();
            let isOrange = colorChance < 0.2; // 20% chance for orange
            let isRed = colorChance >= 0.2 && colorChance < 0.4; // Next 20% chance for red

            // Apply styles based on color
            if (isOrange) {
                // Orange gradient
                shape.style.background = "radial-gradient(circle, rgba(255,140,0,1) 0%, rgba(255,140,0,0.8) 70%, rgba(255,140,0,0) 100%)";
                shape.style.boxShadow = "0 0 6px 2px rgba(255,140,0,0.7)";
                shape.color = 'orange';
            } else if (isRed) {
                // Red gradient
                shape.style.background = "radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(255,0,0,0.8) 70%, rgba(255,0,0,0) 100%)";
                shape.style.boxShadow = "0 0 6px 2px rgba(255,0,0,0.7)";
                shape.color = 'red';
            } else {
                // Yellow gradient (default)
                shape.style.background = "radial-gradient(circle, rgba(254,222,23,1) 0%, rgba(254,222,23,0.8) 70%, rgba(254,222,23,0) 100%)";
                shape.style.boxShadow = "0 0 6px 2px rgba(254,222,23,0.7)";
                shape.color = 'yellow';
            }

            // Common styles
            shape.style.mixBlendMode = 'screen';

            // Positioning and additional properties
            let particleSpreadX = Math.floor(Math.random() * baseWidth) - baseWidth / 2;
            shape.style.left = `${event.clientX + particleSpreadX}px`;
            shape.style.top = `${event.clientY}px`;
            let targetX = event.clientX + Math.random() * baseWidth - baseWidth / 2;
            shape.targetX = targetX;
            shape.timeToLive = Math.random() * (2750 - 2250) + 2250;

            document.body.appendChild(shape);
            shapes.push(shape);

            particlesSpawned++;
        } else {
            clearInterval(spawningInterval);
        }
    }, 20);
};
