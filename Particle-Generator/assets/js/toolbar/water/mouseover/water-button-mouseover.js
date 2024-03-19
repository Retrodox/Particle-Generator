export function addMouseOverEventToWaterButton() {
    const waterButton = document.getElementById('water-btn');
    waterButton.addEventListener('mouseover', function() {
        waterButton.style.backgroundColor = '#f20b00';
        console.log("Mouse entered Water button area. It's nervous but excited. Be gentle.")
    });
}