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

		removeUser(member_id) {
			const group_id = this.get('group').id;
			if(! group_id) { throw new Error("No group ID provided."); }
			if(! member_id) { throw new Error("No member ID provided."); }
			RestUtils.delete(this, `/v1/groups/${group_id}/${member_id}`).then((value) => {
				alert(value);
				const new_group_members = this.get('group.members').filter((member) => member.id !== member_id);
				this.set('group.members', new_group_members);
			});
		},
	}
});


