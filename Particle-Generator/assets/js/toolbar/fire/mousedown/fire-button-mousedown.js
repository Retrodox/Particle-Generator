export function addMouseDownEventToFireButton() {
    const fireButton = document.getElementById('fire-btn');
    fireButton.addEventListener('mousedown', function() {
        fireButton.style.backgroundColor = '#b20b00';
        console.log('Mouse is down on Fire button. Giggty')
    });
}