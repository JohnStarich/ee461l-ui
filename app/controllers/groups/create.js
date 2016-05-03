import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';
export default Ember.Controller.extend({

  actions: {
    createGroup(group_name) {
      if(group_name !== undefined && group_name !== '' && group_name.trim().length > 0){
        group_name = group_name.trim().split(' ').join('+');
        return RestUtils.post(this, '/v1/groups/', {data: {group_name}})
          .then((data) => {
             console.log(data);
             if(this.get('redirect')) {
               this.transitionToRoute(this.get('redirect'));
             }
             else {
              // undefined param in groups.index lists all groups; see /routes/groups/index.js
              this.transitionToRoute('groups.index', '');
             }
          }, (reason) => {
            alert(reason);
            this.transitionToRoute('groups.index', '');
            return false;
          });
	    } else {
	      window.alert("enter a group name!");
	    }
	  }
	}
});
