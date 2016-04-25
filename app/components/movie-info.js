import Ember from 'ember';


export default Ember.Component.extend({
	actions: {
		updateRating(params) {
			const { item: movie, rating } = params;
			console.log("movie");
			movie.set('rating', rating);
			return movie.save();
		}
	},

});


