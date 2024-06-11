document.getElementById('search-button').addEventListener('click', searchImages);

function searchImages() {
    const query = document.getElementById('search-input').value;
    const accessKey = 'zJc-pjyz3DukKMBLVf66752lty_LPolCS7XvozSSeAE'; // Your Unsplash Access Key

    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=30`)
        .then(response => response.json())
        .then(data => {
            displayImages(data.results);
        })
        .catch(error => {
            console.error('Error fetching data from Unsplash:', error);
        });
}