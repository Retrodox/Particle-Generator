export function addMouseUpEventToFireworkButton() {
    const fireworkButton = document.getElementById('firework-btn');
    fireworkButton.addEventListener('mouseup', function() {
        fireworkButton.style.backgroundColor = '#f20b00';
        console.log('Mouse is up on Firework button.')
    });
}