const sansSerifFontButton = document.querySelector('.font-button-sans-serif');
const serifFontButton = document.querySelector('.font-button-serif');

sansSerifFontButton.addEventListener('click', () => {
    document.body.classList.remove('serif');
    sansSerifFontButton.classList.add('active');
    serifFontButton.classList.remove('active');
});

serifFontButton.addEventListener('click', () => {
    document.body.classList.add('serif');
    sansSerifFontButton.classList.remove('active');
    serifFontButton.classList.add('active');
});