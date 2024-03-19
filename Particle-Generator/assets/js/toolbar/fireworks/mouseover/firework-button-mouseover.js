export function addMouseOverEventToFireworkButton() {
    const fireworkButton = document.getElementById('firework-btn');
    fireworkButton.addEventListener('mouseover', function() {
        fireworkButton.style.backgroundColor = '#f20b00';
        console.log("Mouse entered Firework button area. It's nervous but excited. Be gentle.")
    });
}