document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-image');

    images.forEach(image => {
        image.addEventListener('click', () => {
            alert("You clicked on a memory!");
        });
    });
});
