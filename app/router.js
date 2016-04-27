import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('movies', function() {
    this.route('movie', { path: ':movie_id' });
    this.route('search', { path: '/search' });
    this.route('search', { path: '/search/:search' });
  });
  this.route('groups');
  this.route('friends');
  this.route('settings');
});

export default Router;
