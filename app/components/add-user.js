import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';

export default Ember.Component.extend({
	actions: {
		addFriend(params) {
			 var newFriend_id = params;
			 return RestUtils.post(this, 'v1/friends', {data: {newFriend_id: newFriend_id}})
				.then((value) => {
					alert(value);
					return value;
				},
				(reason) => {
					alert(reason);
					return false;
				});
		},
	}

});
