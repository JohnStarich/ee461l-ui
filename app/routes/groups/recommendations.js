import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';

export default Ember.Route.extend({
  model(params) {
    const group_name = params.group_name;
    if(group_name) {
      params['group_name'] = group_name;
      return RestUtils.get(this, `/v1/groups/${group_name}/recommendations/`)
      .then(function(value) {
        var data = value.movies.map((movie) => {
          movie.user_rating = value.ratings[movie.id];
          movie.imdb_rating = movie.imdb_rating / 2;
          return movie;
        });
        params['data'] = data;
        return params;
      });
    } else {
	      window.alert("recommending for which group?");
    }
  }
});
