import Ember from 'ember';
import Cookie from 'moviematcher/utils/cookies';
import RestUtils from 'moviematcher/utils/rest';

export default Ember.Route.extend({
	model() {
	 	const cookie = Cookie.create({name: 'session'}).load();
		return new RestUtils().get('v1/login', {
			headers: {
				"Authorization": cookie
			}
		})
		.then((value) => {
			return value;
		});
	}
});
