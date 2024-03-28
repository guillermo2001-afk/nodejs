$(document).ready(function(){
    $.ajax({
        url: 'additional_content.html',
        success: function(data, textStatus, xhr){
            if (xhr.status == 200) { // Check if server status is okay
                $('#main-content').append(data);
            } else {
                console.error('Error loading HTML: ' + xhr.status);
            }
        }
    });
});
