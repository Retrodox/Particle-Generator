export function addMouseOutEventToConfettiButton() {
    const confettiButton = document.getElementById('confetti-btn');
    confettiButton.addEventListener('mouseout', function() {
        confettiButton.style.backgroundColor = '#e95200';
        console.log('Mouse is out on Confetti button.')
    });
}