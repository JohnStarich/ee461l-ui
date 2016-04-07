import Ember from 'ember';

export function getMovie(params/*, hash*/) {
  var movie;
  $.ajax({
	  dataType: "json",
	  url: 'http://localhost:8080/v1/movies/56f4a2ddd2e161b93b0a49d5',
	  async: false,
	  success: function(data) {
	  	movie = data;
	  }
	});
  console.log(Ember.$('<div>'+movie.title+'</div>'));
  return Ember.String.htmlSafe('<div>'+movie.title+'<br>'+movie.genre+'</div>');
}

export default Ember.Helper.helper(getMovie);
