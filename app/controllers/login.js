import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';
import Cookie from 'moviematcher/utils/cookies';

export default Ember.Controller.extend({
  queryParams: ['redirect'],

  actions: {
		userLogin(username, password) {
      const loginThis = this;
		  const sessionDurationSeconds = 2 * 60 * 60; // 2 hours
			return RestUtils.post(undefined, '/v1/login', {data: {username, password}})
        .then((value) => {
          const cookie = new Cookie('session');
          cookie.save(value.session_id, sessionDurationSeconds);
          if(this.get('redirect')) {
            loginThis.transitionToRoute(this.get('redirect'));
          }
          else {
            loginThis.transitionToRoute('index');
          }
        }, (reason) => {
          alert(reason);
          loginThis.transitionToRoute('register');
          return false;
        });
		}
	}
});
