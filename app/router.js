import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('movies', function() {
    this.route('index', { path: '/:movie_id' });
    this.route('search', { path: '/search' });
    this.route('search', { path: '/search/:search' });
  });
  this.route('friends', function() {
    this.route('index', {path: '/'} );
    this.route('search', {path: '/search'});
    this.route('search', {path: '/search/:search'});
  });
  this.route('groups', function() {
    this.route('index', { path: '/' });
    this.route('index', { path: '/:group_id' });
    this.route('create', {path: '/create/'});
    this.route('add-user', { path: '/:group_name/user/' });
    this.route('recommendations', { path: '/:group_name/recommendations/' });
  });
  this.route('settings');
});

export default Router;
