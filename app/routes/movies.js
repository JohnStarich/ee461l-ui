import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		var movie;
		Ember.$.ajax({
	  		dataType: "json",
	  		url: 'http://localhost:8080/v1/movies/search/The Dark Knight',
			async: false,
	  		success: function(data) {
	  			movie = data;
	  		}
		});
		return movie;
	}
});
