import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		var friend;
		console.log('im in friend_results.js and this is my search query: ' + params.search_query);
		Ember.$.ajax({
	  		dataType: "json",
	  		url: '/v1/friends/search/'+params.search_query,
			async: false,
	  		success: function(data) {
	  		  console.log(data);
	  			friend = data;
	  		}
		});
		return friend;
	},
    actions: {
         getFriendResults(query) {
            console.log('im in friend_results.js');
            console.log(query);
            this.transitionTo('friend_results', query);
            }
       }
});
