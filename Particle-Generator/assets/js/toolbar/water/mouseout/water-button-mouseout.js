export function addMouseOutEventToWaterButton() {
    const waterButton = document.getElementById('water-btn');
    waterButton.addEventListener('mouseout', function() {
        waterButton.style.backgroundColor = '#e95200';
        console.log('Mouse is out on Water button.')
    });
}