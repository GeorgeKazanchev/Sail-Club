const activePhoto = document.querySelector('.active-photo');
const previews = document.querySelectorAll('.gallery-previews a');

for (let preview of previews) {
    preview.addEventListener('click', (evt) => {
        evt.preventDefault();
        activePhoto.src = preview.href;
        const activePreview = document.querySelector('.active-item');
        activePreview.classList.remove('active-item');
        preview.classList.add('active-item');
    });
}