import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';
import Cookie from 'moviematcher/utils/cookies';

export default Ember.Controller.extend({
  actions: {
		userLogin(username, password) {
      const loginThis = this;
		  const sessionDurationSeconds = 2 * 60 * 60; // 2 hours
			return new RestUtils().post('/v1/login', {data: {username, password}})
        .then((value) => {
          const cookie = Cookie.create({name: 'session'});
          cookie.save(value.session_id, sessionDurationSeconds);
          loginThis.transitionToRoute('index');
        }, (reason) => {
          alert(reason);
          loginThis.transitionToRoute('register');
          return false;
        });
		}
	}
});
