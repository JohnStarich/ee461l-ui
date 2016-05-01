import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';

export default Ember.Route.extend({
  model(params) {
    if(params.search) {
      params.search = params.search.split('+').join(' ').trim();
    }
    const query = params.search;
    if(query) {
      return RestUtils.get(this, `/v1/friends/search/${query}`, {data: {results:20, page:1} })
      .then( function(data) {
        params['data'] = data;
        return params;
      });
    }
    return RestUtils.get(this,'/v1/friends')
                       .then( function(data) {
                         params['data'] = data;
                         return params;
                       });
  }
});
