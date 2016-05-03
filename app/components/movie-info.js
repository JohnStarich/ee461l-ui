import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';

export default Ember.Component.extend({
	actions: {
		updateRating(params) {
			 const { item: movie, rating } = params;
			 var id = movie.id;
			 return RestUtils.post(this, 'v1/users/ratings', {data: {user: {id, rating}}})
				.then((value) => {
					alert(value);
					return value;
				},
				(reason) => {
					alert(reason);
					return false;
				});
		}
	},

});


