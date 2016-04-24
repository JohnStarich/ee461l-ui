import Ember from 'ember';

export default Ember.Route.extend({

	actions: {
		userLogin(username, password) {
			console.log("we got to login.js");
			console.log(username);
			console.log(password);
			// var mail = JSON.stringify({'name': username});
			var u = $.parseHTML(username);
			var p = $.parseHTML(password);
			Ember.$.ajax({
				traditional: true,
				type: "POST",
				url: '/v1/login',
				contentType: "application/json; charset=utf-8",
            	dataType: "json",
				data: {username: u, password: p},
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
