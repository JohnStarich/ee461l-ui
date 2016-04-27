import Ember from 'ember';

export default Ember.Controller.extend({
  	actions: {
		userLogin(email, password) {
			const loginThis = this;
			return new Ember.RSVP.Promise(function(resolve, reject) {
				Ember.$.post(
					'/v1/login',
					{email: email, password: password},
					resolve
				).fail(reject);
			}).then(function(value) {
				if(value) {
					loginThis.transitionToRoute('index');
				}
				else {
					alert("you no exist");
				}
				return true;
			});
		}
	}
});