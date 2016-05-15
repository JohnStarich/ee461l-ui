import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';

export default Ember.Route.extend({
	model(params) {
		const group_name = params.group_name;
		if(group_name) {
			params['group_name'] = group_name;
			return RestUtils.get(this, `/v1/groups/${group_name}/recommendations/`)
			.then(function(value) {
				const movies = value.map((movie) => {
					movie.imdb_rating /= 2;
					return movie;
				});
				params['data'] = movies;
				return params;
			});
		} else {
			alert("recommending for which group?");
		}
	}
});
