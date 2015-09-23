/**
 * 
 */

$(document).ready(function(){
	
	$('#trigger-submit-btn').click(function(e){
		e.preventDefault();
		console.log($('#trigger-form').serialize());
//		var name =$( "#trigger-name" ).val();
//		var sensorId =$( "#sensor option:selected" ).val(); 
//		var condition = $( "#condition option:selected" ).val();
//		var option = $( "#option option:selected" ).val();
//		var value = $( "#condition-value" ).val();
//		
		
		var trigger = $('#triggerForm').serialize();
//		trigger.name=name;
//		trigger.sensorId = sensorId;
//		trigger.condition= condition;
//		trigger.option = option;
//		trigger.value = parseFloat(value);
//		
		console.log(trigger);
		
	    $.ajax({
	        type: 'POST',
	        data: trigger,
	        url: '/triggers/reaction/add',
	        dataType: 'JSON'
	    }).done(function( response ) {
	
	        // Check for successful (blank) response
	        if (response.status === 'success') {
	            // Update the table
	           console.log("success");
	
	        }
	        else {
	            // If something goes wrong, alert the error message that our service returned
	            alert('Error: ' + response.message);
	        }
	    });	
		
	});
	
});