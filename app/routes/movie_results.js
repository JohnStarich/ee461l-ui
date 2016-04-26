import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		var movie;
		console.log('im in movie_results.js and this is my search query: ' + params.search_query);
		Ember.$.ajax({
	  		dataType: "json",
	  		url: '/v1/movies/search/'+params.search_query,
			async: false,
	  		success: function(data) {
	  		  console.log(data);
	  			movie = data;
	  		}
		});
		return movie;
	},
  actions: {
       getMovieResults(query) {
          console.log('im in movie_results.js');
          console.log(query);
          this.transitionTo('movie_results', query);
          }
     }
});
