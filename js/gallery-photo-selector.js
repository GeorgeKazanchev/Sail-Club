const activePhoto = document.querySelector('.active-photo');
const previews = document.querySelectorAll('.preview-item');

for (let preview of previews) {
    preview.addEventListener('click', (evt) => {
        evt.preventDefault();
        const previewLink = preview.querySelector('a');
        activePhoto.src = previewLink.href;
        const activePreview = document.querySelector('.active-item');
        activePreview.classList.remove('active-item');
        preview.classList.add('active-item');
    });
}