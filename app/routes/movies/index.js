import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';

export default Ember.Route.extend({
  model(params) {
		const movie_id = params.movie_id;
    if(movie_id) {
      return RestUtils.get(this, `/v1/movies/${movie_id}`)
        .then((data) => {
          params['data'] = data;
          return params;
        }, (reason) => {
          alert(reason);
          return false;
        });
    }
  }
});



