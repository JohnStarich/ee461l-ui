import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
		const query = params.search;
		if(query !== undefined && query !== '') {
		  return new Ember.RSVP.Promise(function(resolve, reject) {
        Ember.$.getJSON(
          `/v1/movies/search/${query}`,
          {results: 20, page:1},
          resolve
        ).fail(reject);
      }).then(function(data) {
        params['data'] = data;
        return params;
      });
		}
  }
});
