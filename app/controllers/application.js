import Ember from 'ember';
import Cookie from 'moviematcher/utils/cookies';

export default Ember.Controller.extend({
	actions: {
		logout() {
			const c = new Cookie('session');
			c.delete();
		},

		refresh() {
			console.log("refresh");
		}
	}
});