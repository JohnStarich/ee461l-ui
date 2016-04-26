import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
       getFriendResults(query) {
          console.log('im in friends.js');
          console.log(query);
          this.transitionTo('friend_results', query);
          }
     }
});
