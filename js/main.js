document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.target.style.backgroundColor = 'yellow';
        });
    });
});