import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('sendLogin', {path: '/login/:username'});
  this.route('movies');
  this.route('groups');
  this.route('friends');
  this.route('settings');
});

export default Router;
