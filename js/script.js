// Handle form submission
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Stop form from submitting normally
    searchImages();  // Call search function
});

// Function to search images using Unsplash API
function searchImages() {
    const query = document.getElementById('search-input').value;  // Get search term
    const accessKey = 'zJc-pjyz3DukKMBLVf66752lty_LPolCS7XvozSSeAE';  // Unsplash API key

// Handle form submission
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Stop form from submitting normally
    searchImages();  // Call search function
});

// Function to search images using Unsplash API
function searchImages() {
    const query = document.getElementById('search-input').value;  // Get search term
    const accessKey = 'zJc-pjyz3DukKMBLVf66752lty_LPolCS7XvozSSeAE';  // Unsplash API key

    // Fetch images from Unsplash
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=30`)
        .then(response => response.json())  // Convert response to JSON
        .then(data => {
            displayImages(data.results);  // Show images
        })
        .catch(error => {
            console.error('Error fetching data from Unsplash:', error);  // Log error
        });
}

// Function to display images
function displayImages(images) {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';  // Clear previous images

    images.forEach(image => {
        const imgElement = document.createElement('img');  // Create image element
        imgElement.src = image.urls.small;  // Set image source
        imgElement.alt = image.alt_description;  // Set image alt text
        imageContainer.appendChild(imgElement);  // Add image to container
    });
}

//Test the Form Submission once the HTML is completed.
//my code here

//Validate the API Calls-make sure the api call to Unsplash is fetching the data correctly.
//my code here

//Confirm the image display in the image container with LG and CM
//my code here

//Add Pagination-research the logic and limitations of what happens when the user clicks the load more button.
//my code here

