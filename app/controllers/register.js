import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';

export default Ember.Controller.extend({
	actions: {
		userRegister(first_name, last_name, username, password, old_password) {
			return RestUtils.post(undefined, '/v1/users', {data: {first_name, last_name, username, password, old_password}})
				.then((value) => {
					if(! value) {
						alert("Error registering, please try again");
						return false;
					}
					this.transitionToRoute('login');
				}, (reason) => {
					alert(reason);
					return false;
				});
		}
	}
});
