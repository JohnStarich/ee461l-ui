import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';

export default Ember.Route.extend({
  model(params) {
    if(params.search) {
      params.search = params.search.split('+').join(' ').trim();
    }
		const query = params.search;
		if(query) {
		  return RestUtils.get(this, `/v1/movies/search/${query}`, {data: {results: 20, page:1}})
        .then(function(value) {
          var data = value.movies.map((movie) => {
            movie.user_rating = value.ratings[movie.id];
            movie.imdb_rating = movie.imdb_rating / 2;
            return movie;
          });
          params['data'] = data;
          return params;
        });
		}
		return {};
  }
});
