import Ember from 'ember';
import RestUtils from 'moviematcher/utils/rest';
import Cookie from 'moviematcher/utils/cookies';

export default Ember.Controller.extend({
  	actions: {
		userRegister(firstname, lastname, username, password, confirmpassword) {
			const registerThis = this;
			const sessionDurationSeconds = 2 * 60 * 60; // 2 hours
			return new RestUtils().post('/v1/login/register', {data: {firstname, lastname, username, password, confirmpassword}})
        		.then((value) => {
        		  if(value === "success") {
	      			  const cookie = Cookie.create({name: 'session'});
	          		  cookie.save(value.session_id, sessionDurationSeconds);
	      			  registerThis.transitionToRoute('index');
      			  }
      			  else {
      			  	alert(value);
      			  }
        	});
		}
	}
});
