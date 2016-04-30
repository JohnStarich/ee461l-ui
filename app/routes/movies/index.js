import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log('Im in index.js');
    console.log(params.movie_id);
//    var movie = {};
//    const movie_id = params.movie_id;
//    Ember.$.ajax({
//        dataType: "json",
//        url: '/v1/movies/'+movie_id,
//    async: false,
//        success: function(data){
//            console.log(data);
//            movie = data;
//        }
//    });
//    return movie;
		const query = params.movie_id;
		if(query) {
		  return new Ember.RSVP.Promise(function(resolve, reject) {
        Ember.$.getJSON(
          `/v1/movies/${query}`,
          resolve
        ).fail(reject);
      }).then(function(data) {
        console.log(data);
        params['data'] = data;
        console.log(params);
        return params;
      });
		}
		return {};
  }
});



