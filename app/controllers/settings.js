import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';

export default Ember.Controller.extend({
	actions: {
		changePassword(old_password, password, new_password) {
			console.log(password);
			console.log(new_password);
			if(password === new_password) {
			return RestUtils.patch(this, 'v1/users', {data: {user: {old_password, password}}})
				.then((value) => {
					alert(value);
					return value;
				},
				(reason) => {
					alert(reason);
					return false;
				});
			}
			else {
				alert("new password does not match confirmation!");
			}
		},
		changeName(first_name, last_name) {
			return RestUtils.patch(this, 'v1/users', {data: {user:{first_name, last_name}}})
				.then((value) => {
					alert(value);
					return value;
				},
				(reason) => {
					alert(reason);
					return false;
				});
		}
	}
});