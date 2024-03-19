export function addMouseUpEventToWaterButton() {
    const waterButton = document.getElementById('water-btn');
    waterButton.addEventListener('mouseup', function() {
        waterButton.style.backgroundColor = '#f20b00';
        console.log('Mouse is up on Water button.')
    });
}