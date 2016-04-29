import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';
import Cookie from 'moviematcher/utils/cookies';

export default Ember.Controller.extend({
  actions: {
		userLogin(username, password) {
		  const sessionDurationSeconds = 2 * 60 * 60; // 2 hours
			return new RestUtils().post('/v1/login', {username, password})
        .then((value) => {
          const cookie = Cookie.create({name: 'session'});
          cookie.save(value.session_id, sessionDurationSeconds);
          this.transitionToRoute('index');
        });
		}
	}
});
