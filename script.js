// Object to store images by date
const galleries = {
    "2024-01-01": [],
    "2024-05-15": [],
    "2024-12-25": []
};

// Open gallery for a specific date
function openGallery(date) {
    // Hide the date selection and show the gallery section
    document.querySelector('.date-segmentation').style.display = 'none';
    document.getElementById('gallery').style.display = 'block';
    
    // Update the gallery title
    document.getElementById('galleryTitle').textContent = `Gallery for ${date}`;

    // Display the images for the selected date
    displayImages(date);
}

// Display images for a given date
function displayImages(date) {
    const container = document.getElementById('imageContainer');
    container.innerHTML = ''; // Clear current images

    // Get the images for the selected date
    const images = galleries[date];

    // Create image elements and append them to the container
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = `Image for ${date}`;
        container.appendChild(imgElement);
    });
}

// Handle image upload
document.getElementById('fileInput').addEventListener('change', function(event) {
    const selectedDate = document.getElementById('galleryTitle').textContent.split(' ')[2]; // Get the selected date
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = function(e) {
            // Add the image to the gallery for the selected date
            galleries[selectedDate].push(e.target.result);
            displayImages(selectedDate); // Refresh the gallery
        };
        reader.readAsDataURL(file); // Convert the file to a data URL
    }
});
