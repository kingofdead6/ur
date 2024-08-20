document.addEventListener("DOMContentLoaded", () => {
    const imageGallery = document.getElementById('image-gallery');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = document.getElementById('close-btn');

    // Fetch images from the server
    fetch('list-images.php')
        .then(response => response.json())
        .then(images => {
            images.forEach(image => {
                const img = document.createElement('img');
                img.src = `uploads/${image}`;
                img.alt = 'Fashion Item';
                imageGallery.appendChild(img);
                setupImageClick(img);
            });
        })
        .catch(error => console.error('Error fetching images:', error));

    function setupImageClick(img) {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImage.src = img.src;
        });
    }

    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    modal.addEventListener('click', (e) => {
        if (e.target !== modalImage) {
            modal.style.display = "none";
        }
    });
});
