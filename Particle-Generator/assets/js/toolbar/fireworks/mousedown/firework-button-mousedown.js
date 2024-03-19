export function addMouseDownEventToFireworkButton() {
    const fireworkButton = document.getElementById('firework-btn');
    fireworkButton.addEventListener('mousedown', function() {
        fireworkButton.style.backgroundColor = '#b20b00';
        console.log('Mouse is down on Firework button.')
    });
}
