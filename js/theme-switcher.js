const themeButtonDark = document.querySelector('.theme-button-dark');
const themeButtonLight = document.querySelector('.theme-button-light');

themeButtonDark.addEventListener('click', () => {
    document.body.classList.add('dark');
    themeButtonDark.classList.add('active');
    themeButtonLight.classList.remove('active');
});

themeButtonLight.addEventListener('click', () => {
    document.body.classList.remove('dark');
    themeButtonDark.classList.remove('active');
    themeButtonLight.classList.add('active');
});