export function addMouseOutEventToFireButton() {
    const fireButton = document.getElementById('fire-btn');
    fireButton.addEventListener('mouseout', function() {
        fireButton.style.backgroundColor = '#e95200';
        console.log('Mouse is out on Fire button.')
    });
}