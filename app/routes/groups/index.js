import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';


export default Ember.Route.extend({
  model(params) {
    const group_id = params.group_id;
    if(group_id) {
      return RestUtils.get(this, `/v1/groups/${group_id}`)
          .then(function(data) {
            params['data'] = data;
            return params;
          });
    } else {
		return RestUtils.get(this, `/v1/groups/`)
        .then(function(data) {
          params['data'] = data;
          return params;
        });
    }
  }
});
