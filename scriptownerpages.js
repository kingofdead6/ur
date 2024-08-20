document.addEventListener("DOMContentLoaded", () => {
    const imageUpload = document.getElementById('image-upload');
    const uploadBtn = document.getElementById('upload-btn');
    const imageGallery = document.getElementById('image-gallery');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = document.getElementById('close-btn');

    uploadBtn.addEventListener('click', () => {
        if (imageUpload.files.length > 0) {
            const file = imageUpload.files[0];
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = 'Uploaded Image';
                imageGallery.appendChild(img);
                setupImageClick(img);
            };
            
            reader.readAsDataURL(file);
        }
    });

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
