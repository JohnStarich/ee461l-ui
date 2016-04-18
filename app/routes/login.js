import Ember from 'ember';

export default Ember.Route.extend({

	actions: {
		userLogin(username, password) {
			console.log("we got to login.js");
			console.log(username);
			console.log(password);
			var mail = JSON.stringify({'name': username});
			Ember.$.ajax({
				type: "POST",
				url: '/v1/login/',
				contentType: "application/json; charset=utf-8",
            	dataType: "json",
				data: mail,
				async: false,
				success: function(data) {
					if(data) {
						// this.transitionTo('index');
						console.log("valid user");
					}
					else {
					 console.log("invalid user");
					}
				}
			});
		}
	}
});
