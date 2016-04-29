import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		console.log("go to api");
		var user;
		Ember.$.ajax({
	  		dataType: "json",
	  		url: '/v1/login/session',
			async: false,
	  		success: function(data) {
	  			console.log(data.email);
	  			 user = data;
	  		}
	 	});
	 	return user;
	}
});