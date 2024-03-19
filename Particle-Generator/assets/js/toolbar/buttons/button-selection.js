// Get all buttons with class "selectable"
export let selectedButtonId = null;

export function buttonSelection() {
  const buttons = document.querySelectorAll('.selectable');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      if (this.style.border === '2px solid white') {
        this.style.border = '2px solid transparent';
        selectedButtonId = null;  // Reset the selected button ID
      } else {
        buttons.forEach(btn => {
          btn.style.border = '2px solid transparent';
        });

        this.style.border = '2px solid white';
        selectedButtonId = this.id;  // Set the selected button ID
      }
    });
  });
}

console.log("button selection printed");

