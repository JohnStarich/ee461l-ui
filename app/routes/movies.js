import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
       getMovieResults(query) {
          console.log('im in movies.js');
          console.log(query);
          this.transitionTo('movie_results', query);
          }
     }
});
