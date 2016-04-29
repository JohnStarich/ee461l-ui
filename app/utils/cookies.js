import Ember from 'ember';

/**
 * Initialize by setting name property like so
 * import Cookie from 'moviematcher/utils/cookies';
 * var cookie = Cookie.create({name: 'session'});
 *
 * cookie.save('29376497', 2 * 60 * 60); // 2 hours
 * var cookieString = cookie.load();
 */
export default Ember.Object.extend({
  save(value, expireSeconds) {
    let date = new Date();
    date.setTime(date.getTime() + (expireSeconds * 1000));
    const expires = "expires="+ date.toUTCString();
    document.cookie = this.name + "=" + value + "; " + expires + "; path=/";
  },

  load() {
      const name = this.name + "=";
      let ca = document.cookie.split(';');
      for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }
});
