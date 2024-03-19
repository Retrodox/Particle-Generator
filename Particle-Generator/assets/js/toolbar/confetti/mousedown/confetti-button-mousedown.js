export function addMouseDownEventToConfettiButton() {
    const confettiButton = document.getElementById('confetti-btn');
    confettiButton.addEventListener('mousedown', function() {
        confettiButton.style.backgroundColor = '#b20b00';
        console.log('Mouse is down on Confetti button. Giggty')
    });
}