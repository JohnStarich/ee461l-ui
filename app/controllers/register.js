import Ember from 'ember';

export default Ember.Controller.extend({
  	actions: {
		userLogin(firstname, lastname, email, username, password, confirmpassword) {
			const registerThis = this;
			return new Ember.RSVP.Promise(function(resolve, reject) {
				Ember.$.post(
					'/v1/login/register',
					{firstname: firstname, lastname: lastname, email: email, username: username, password: password, confirmpassword: confirmpassword},
					resolve
				).fail(reject);
			}).then(function(value) {
				if(value === "success") {
					registerThis.transitionToRoute('index');
				}
				else {
					alert(value);
				}
				return true;
			});
		}
	}
});