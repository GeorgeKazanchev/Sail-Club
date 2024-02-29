const gridViewButton = document.querySelector('.card-view-button-grid');
const listViewButton = document.querySelector('.card-view-button-list');
const cards = document.querySelector('.rent-yacht-list');

gridViewButton.addEventListener('click', () => {
    cards.classList.remove('list');
    gridViewButton.classList.add('active');
    listViewButton.classList.remove('active');
});

listViewButton.addEventListener('click', () => {
    cards.classList.add('list');
    gridViewButton.classList.remove('active');
    listViewButton.classList.add('active');
});