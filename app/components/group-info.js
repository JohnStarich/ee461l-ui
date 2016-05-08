import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';


export default Ember.Component.extend({
	actions: {
		deleteGroup() {
			const group_id = this.get('group').id;
			if(! group_id) {
				throw new Error("No group ID provided");
			}
			RestUtils.delete(this, `/v1/groups/${group_id}`)
				.then((value) => {
					this.set('group', undefined);
					alert(value);
				});
		},
	}
});


