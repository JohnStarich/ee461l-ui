import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';

export default Ember.Route.extend({
  model(params) {
    const group_name = params.group_name;
    if(group_name) {
      params['group_name'] = group_name;
      return RestUtils.get(this, `/v1/groups/${group_name}/recommendations/`)
      .then(function(data) {
      params['data'] = data;
      return params;
      });
    } else {
	      window.alert("recommending for which group?");
    }
  }
});
