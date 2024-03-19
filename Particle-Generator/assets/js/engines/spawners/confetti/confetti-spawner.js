import { buttonSelection, selectedButtonId } from '../../../toolbar/buttons/button-selection.js';

export let shapes = [];  // Declare and export shapes array

buttonSelection();



document.addEventListener("DOMContentLoaded", function() {
  buttonSelection();
  spawnConfetti();
});

const colors = ["#1A090D", "#4A314D", "#6B6570", "#A8BA9A", "#ACE894"];


let lastClickTime = 0;

export function spawnConfetti() {
  document.addEventListener("click", function(event) {
    let now = new Date().getTime();
    let box = document.getElementById('transparent-box');

    if (box === null) {
      console.log("Transparent Box does not exist");
      return;
    }

    if (box.contains(event.target) && selectedButtonId === "confetti-btn") {
      if (now - lastClickTime >= 1000 || lastClickTime === 0) {
        lastClickTime = now;

        const popSound = document.getElementById("popSound"); //gets popSound from HTML
        popSound.play();


        for (let i = 0; i < 25; i++) {
          createShape(event, "square");
        }
        for (let i = 0; i < 10; i++) {
          createShape(event, "string");
        }
      }
    }
  });
}




function createShape(event, type) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  let particleSpreadX = Math.floor(Math.random() * 31) - 15;
  let particleSpreadY = Math.floor(Math.random() * 31) - 15;

  if (type === "square") {
    let shape = document.createElement("div");
    shape.style.backgroundColor = randomColor;
    shape.style.position = "absolute";
    shape.style.width = "6px";
    shape.style.height = "6px";
    shape.style.transform = `rotate(${Math.random() * 360}deg)`;
    shape.style.left = `${event.clientX + particleSpreadX}px`;
    shape.style.top = `${event.clientY + particleSpreadY}px`;
    document.body.appendChild(shape);
    shapes.push(shape);
  } else if (type === "string") {
      let zigzagContainer = document.createElement("div");
      zigzagContainer.style.position = "absolute";
      zigzagContainer.style.left = `${event.clientX + particleSpreadX}px`;
      zigzagContainer.style.top = `${event.clientY + particleSpreadY}px`;
      zigzagContainer.style.transform = `rotate(${Math.random() * 360}deg)`;  // Rotate the container

      for (let segmentIndex = 0; segmentIndex < 3; segmentIndex++) {
        let zigzagSegment = document.createElement("div");
        zigzagSegment.style.backgroundColor = randomColor;
        zigzagSegment.style.width = "2px";
        zigzagSegment.style.height = "6px";
        zigzagSegment.style.position = "absolute";
        zigzagSegment.style.bottom = `${segmentIndex * 6}px`;
        zigzagSegment.style.transform = `rotate(${(segmentIndex % 2 === 0 ? 0 : 45)}deg)`;
        zigzagContainer.appendChild(zigzagSegment);
      }

      document.body.appendChild(zigzagContainer);
      shapes.push(zigzagContainer);
    }
}

