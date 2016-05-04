import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';

export default Ember.Component.extend({
	actions: {
		deleteFriend(params) {
		  if(! params) { throw new Error("No friend to delete"); }
		  var delFriend_id = params;
		  return RestUtils.delete(this, `v1/friends/${delFriend_id}`)
		  	.then( (value) => {
		  		alert(value);
		  		return value;
		  	},
		  	(reason) => {
		  		alert(reason);
		  		return false;
		  	});
		}
	}
});
