// Select the button element
const button = document.querySelector('button');

// Add event listener to the button
button.addEventListener('click', function() {
  // Create a new element for the gallery
  const gallery = document.createElement('div');
  gallery.style.display = 'flex';
  gallery.style.flexWrap = 'wrap'; // Set flexWrap to wrap
  gallery.style.justifyContent = 'center';
  gallery.style.alignItems = 'center';
  gallery.style.height = '100vh'; // Set the height of the gallery to 100% of the viewport height
  gallery.style.overflow = 'auto'; // Set the overflow property to 'auto' to enable scrolling
  
  // Add images to the gallery
  const images = [
    '/images/image1.webp',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image2.jpg'
  ];
  
  for (let i = 0; i < images.length; i++) {
    const image = document.createElement('img');
    image.src = images[i];
    image.style.width = '40%'; // Set the width of the image to 80% of the gallery
    gallery.appendChild(image);
  }
  
  // Find the position to insert the gallery
  const container = document.getElementById('gallerycontainer');
  
  // Set the container's overflow property to 'hidden'
  container.style.overflow = 'hidden';
  
  // Insert the gallery into the container
  container.appendChild(gallery);
  
  // Hide the button
  button.style.display = 'none';
});
