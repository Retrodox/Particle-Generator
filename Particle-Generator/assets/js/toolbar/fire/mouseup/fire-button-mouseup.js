export function addMouseUpEventToFireButton() {
    const fireButton = document.getElementById('fire-btn');
    fireButton.addEventListener('mouseup', function() {
        fireButton.style.backgroundColor = '#f20b00';
        console.log('Mouse is up on fire button.')
    });
}