import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		var movie;
		console.log("got to movies");
		Ember.$.ajax({
	  		dataType: "json",
	  		url: '/v1/movies/search/The Dark Knight',
			data: {results: 20, page:1},
			async: false,
	  		success: function(data) {
	  			movie = data;
	  		}
		});
		return movie;
	},
});
