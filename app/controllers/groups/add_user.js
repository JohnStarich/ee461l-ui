import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';
export default Ember.Controller.extend({

  actions: {
    addUser(username, group_name) {
      console.log(username + " and " + group_name);
      if(username !== undefined && username !== '' && username.trim().length > 0){
        username = username.trim().split(' ').join('+');
        console.log(username);
        return RestUtils.post(this, `/v1/groups/${group_name}/user/`, {data: {username}})
        .then((data) => {
          console.log(data);
          if(this.get('redirect')) {
            this.transitionToRoute(this.get('redirect'));
          } else {
            // undefined param in groups.index lists all groups; see /routes/groups/index.js
            this.transitionToRoute('groups.index', '');
          }
        }, (reason) => {
          alert(reason);
          this.transitionToRoute('groups.index', '');
          return false;
        });
      } else {
        window.alert("enter a username!");
      }
    }
  }
});
