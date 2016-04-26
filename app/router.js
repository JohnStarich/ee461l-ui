import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('home');
  this.route('movies');
  this.route('movie_results', { path: '/movies/search/:search_query' });
  this.route('groups');
  this.route('friends');
  this.route('friend_results', { path: '/friends/search/:search_query' });
  this.route('settings');
});

export default Router;
