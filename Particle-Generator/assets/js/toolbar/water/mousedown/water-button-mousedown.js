export function addMouseDownEventToWaterButton() {
    const waterButton = document.getElementById('water-btn');
    waterButton.addEventListener('mousedown', function() {
        waterButton.style.backgroundColor = '#b20b00';
        console.log('Mouse is down on Water button. Giggty')
    });
}