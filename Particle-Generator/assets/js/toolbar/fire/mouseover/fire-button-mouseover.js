export function addMouseOverEventToFireButton() {
    const fireButton = document.getElementById('fire-btn');
    fireButton.addEventListener('mouseover', function() {
        fireButton.style.backgroundColor = '#f20b00';
        console.log("Mouse entered Fire button area. It's nervous but excited. Be gentle.")
    });
}