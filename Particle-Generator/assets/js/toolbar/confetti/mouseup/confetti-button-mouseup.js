export function addMouseUpEventToConfettiButton() {
    const confettiButton = document.getElementById('confetti-btn');
    confettiButton.addEventListener('mouseup', function() {
        confettiButton.style.backgroundColor = '#f20b00';
        console.log('Mouse is up on Confetti button.')
    });
}