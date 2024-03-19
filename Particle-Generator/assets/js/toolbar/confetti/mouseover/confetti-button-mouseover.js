export function addMouseOverEventToConfettiButton() {
    const confettiButton = document.getElementById('confetti-btn');
    confettiButton.addEventListener('mouseover', function() {
        confettiButton.style.backgroundColor = '#f20b00';
        console.log("Mouse entered Confetti button area. It's nervous but excited. Be gentle.")
    });
}
