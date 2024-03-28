document.addEventListener('DOMContentLoaded', function () {

    // Select all elements with the class 'price-box'
    var priceBoxes = document.querySelectorAll('.price-box');

    // Check if at least one or more elements were found
    if (priceBoxes.length > 0) {

        // Loop through each price box element
        priceBoxes.forEach(function (priceBox) {

            // Store the original content
            var originalContent = priceBox.innerHTML;

            // Add a 'mouseover' event listener to each price box
            priceBox.addEventListener('mouseover', function (event) {

                // Remove existing text content
                priceBox.innerHTML = '';

                // Create a new element to hold additional information
                var additionalInfo = document.createElement('div');

                // Create a text node with the additional information
                var infoText = document.createTextNode('Contact me for more details!');

                // Attach the text node to the new element
                additionalInfo.appendChild(infoText);

                // Append the new element to the price box
                priceBox.appendChild(additionalInfo);
            });

            // Add a 'mouseout' event listener to each price box
            priceBox.addEventListener('mouseout', function (event) {

                // Remove the additional information element
                var additionalInfo = priceBox.querySelector('div');
                if (additionalInfo) {
                    priceBox.removeChild(additionalInfo);

                    // Restore the original content
                    priceBox.innerHTML = originalContent;
                }
            });
        });
    }
});
