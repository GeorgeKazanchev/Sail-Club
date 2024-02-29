const events = document.querySelectorAll('.event.short');

for (let event of events) {
    const expandButton = event.querySelector('.more');
    expandButton.addEventListener('click', () => {
        event.classList.remove('short');
    });
}