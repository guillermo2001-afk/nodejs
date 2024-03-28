    $(document).ready(function() {
      var rotatingGallery = $('#rotating-gallery');
      var images = rotatingGallery.find('img');
      let currentIndex = 0;

      // Hide all images except the first one initially
      images.not(':first').hide();

      function rotateGallery() {
        images.eq(currentIndex).hide();
        currentIndex = (currentIndex + 1) % images.length;
        images.eq(currentIndex).show();
      }

      setInterval(rotateGallery, 2000); // time interval change
    });
