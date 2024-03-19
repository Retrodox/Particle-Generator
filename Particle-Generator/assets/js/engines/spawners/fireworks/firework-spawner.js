import { buttonSelection, selectedButtonId } from '../../../toolbar/buttons/button-selection.js';

export let shapes = [];

buttonSelection();

document.addEventListener("DOMContentLoaded", function() {
  buttonSelection();
  spawnFireworks();
});

const colors = ["#1A090D", "#4A314D", "#6B6570", "#A8BA9A", "#ACE894"];


let lastClickTime = 0;


export function spawnFireworks() {
    document.addEventListener("click", function(event) {
        let now = new Date().getTime();
        let box = document.getElementById('transparent-box');

        if (box === null) {
            console.log("Transparent Box does not exist");
            return;
        }

        if (box.contains(event.target) && selectedButtonId === "firework-btn") {
              if (now - lastClickTime >= 1000 || lastClickTime === 0) {
                lastClickTime = now;

                for (let i = 0; i < 25; i++) {
                  createSquare(event, "square");
        }
      }
    }
  });
}

function createSquare(event, type) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  //let particleSpreadX = Math.floor(Math.random() * 31) - 15;
  //let particleSpreadY = Math.floor(Math.random() * 31) - 15;

  if (type === "square") {
    let shape = document.createElement("div");
    shape.style.backgroundColor = randomColor;
    shape.style.position = "absolute";
    shape.style.width = "6px";
    shape.style.height = "6px";
    shape.style.transform = `rotate(${Math.random() * 360}deg)`;
    shape.style.left = `${event.clientX}px`;
    shape.style.top = `${event.clientY}px`;
    shape.phase = 'stacked';
    document.body.appendChild(shape);
    shapes.push(shape);
   }
}