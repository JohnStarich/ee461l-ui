import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';


export default Ember.Controller.extend({
  actions: {
    addUser(username, group_name) {
      if(username !== undefined && username !== '' && username.trim().length > 0){
        username = username.trim().split(' ').join('+');
        return RestUtils.post(this, `/v1/groups/${group_name}/user/`, {data: {username}})
          .then((data) => {
            if(this.get('redirect')) {
              this.transitionToRoute(this.get('redirect'));
            } else {
              // undefined param in groups.index lists all groups; see /routes/groups/index.js
              this.transitionToRoute('groups.index', '');
            }
          }, (reason) => {
            alert(reason);
            return false;
          });
      } else {
        alert("enter a username!");
      }
    }
  }
});
