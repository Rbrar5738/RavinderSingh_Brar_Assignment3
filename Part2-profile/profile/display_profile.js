"use strict";

$(document).ready( () => {
	// display data from session storage

	$('#email').html(sessionStorage.getItem("email"));	
	$('#phone').html(sessionStorage.getItem("phone"));
	$('#postal').html(sessionStorage.getItem("postal"));
	$('#dob').html(sessionStorage.getItem("dob"));
	
	$("#back").click( () => {
// code to move back in the history object
		history.back();
		
	}); // end of click()
	
}); // end of ready()