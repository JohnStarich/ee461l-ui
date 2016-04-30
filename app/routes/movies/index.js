import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
		const query = params.movie_id;
		if(query) {
		  return new Ember.RSVP.Promise(function(resolve, reject) {
        Ember.$.getJSON(
          `/v1/movies/${query}`,
          resolve
        ).fail(reject);
      }).then(function(data) {
        params['data'] = data;
        return params;
      });
		}
		return {};
  }
});



