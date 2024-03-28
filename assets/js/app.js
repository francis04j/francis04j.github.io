$(function() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	$.getJSON("https://api.ipify.org?format=json",
            function (data) {
 
                // Displayin IP address on screen
                $("#ip").val(data.ip);
            })

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		var apigClient = apigClientFactory.newClient();
		var postMsg = {
			"name": $('#name').val(),
			"email": $('#email').val(),
			"message": $('#message').val(),
			"ip": $('#ip').val(),
		}
		
		if($('#ip').val()!== ''){
			apigClient.conversationsPost({}, postMsg, {}).then(
				function(response){
					// Make sure that the formMessages div has the 'success' class.
					$(formMessages).removeClass('error');
					$(formMessages).addClass('success');

					// Set the message text.
					$(formMessages).text("Message sent.");
						

					// Clear the form.
					$('#name').val('');
					$('#email').val('');				
					$('#message').val('');
					$('#ip').val('')

				}
			)
		}else{
			$(formMessages).text("We received your inital message. We will be in touch shortly");
		}
		/*.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});*/

	});

});
