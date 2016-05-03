import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';

export default Ember.Controller.extend({
	actions: {
		changePassword(old_password, password, new_password) {
			if(password == null || old_password== null) {
				alert("please enter a password");
				return false;
			}

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
				return false;
			}
		},
		changeName(first_name, last_name) {
			if(first_name == null || last_name == null) {
				alert("plese enter text into both fields");
				return false;
			}
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