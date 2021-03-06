import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';

export default Ember.Route.extend({
	model() {
		return RestUtils.get(this, '/v1/users')
			.then((value) => {
				return value;
			});
	}
});
