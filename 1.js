const accessKey = '3KXScgaVWcZHi9Pzk0FXOy0jMgRA2zAQLVEmAPV73SM';
const galleryContainer = document.getElementById('gallery');

async function fetchImagessearch() {
    try {
        const query = document.getElementById('categoryInput').value
        // const response = await fetch(`https://api.unsplash.com/search/photos/?query=${query}?client_id=${accessKey}`);
        const response = await fetch(`https://api.unsplash.com/photos/?client_id=${accessKey}`);
        const data = await response.json();

        if (Array.isArray(data)) {
            data.forEach(photo => {
                const imgElement = document.createElement('img');
                imgElement.src = photo.urls.small;
                imgElement.alt = photo.alt_description;
                imgElement.classList.add('gallery-item');
                galleryContainer.appendChild(imgElement);
            });
        } else {
            console.error('Invalid data format:', data);
        }
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}
fetchImagessearch();