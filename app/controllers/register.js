import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';

export default Ember.Controller.extend({
	actions: {
		userRegister(first_name, last_name, username, password, confirm_password) {
			let errors = ["Please fix the following before registering:"];
			if(! password || password.trim() === '') {
				errors.push("Password cannot be blank");
			}
			if(password !== confirm_password) {
				errors.push("Passwords do not match");
			}
			if(! username || username.trim() === '') {
				errors.push("No username provided");
			}
			if(! first_name || first_name.trim() === '') {
				errors.push("No first name provided");
			}
			if(! last_name || last_name.trim() === '') {
				errors.push("No last name provided");
			}

			if(errors.length > 1) {
				alert(errors.join('\n'));
				return false;
			}
			return RestUtils.post(undefined, '/v1/users', {data: {first_name, last_name, username, password}})
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
