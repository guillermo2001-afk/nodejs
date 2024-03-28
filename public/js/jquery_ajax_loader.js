$(document).ready(function(){
    // Define the event that triggers the Ajax request
    $('#trigger-element').click(function(){
        // Hide the button
        $(this).hide();
        
        // Use the .load() method to load the HTML page via Ajax
        $('#target-element').load('additional_content.html', function(response, status, xhr) {
            // Check if the HTML loaded successfully
            if (status == "success") {
                // Apply jQuery effect for transition
                $(this).slideDown('slow');
                // Show the hidden card
                $('#new-service-card').show();
            } else {
                console.error('Error loading HTML: ' + xhr.status);
            }
        });
    });
});
