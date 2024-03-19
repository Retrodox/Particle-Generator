export function addMouseOutEventToFireworkButton() {
    const fireworkButton = document.getElementById('firework-btn');
    fireworkButton.addEventListener('mouseout', function() {
        fireworkButton.style.backgroundColor = '#e95200';
        console.log('Mouse is out on Firework button.')
    });
}
