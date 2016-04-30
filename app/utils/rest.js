import Ember from 'ember';

export default Ember.Object.extend({
  service(method, url, options = {
    dataType: 'json',
  }) {
    return new Ember.RSVP.Promise(function(resolve, reject) {

      options.url = url;
      options.type = method;
      options.success = resolve;
      options.error = reject;
      if(method !== 'GET' && method !== 'get') {
        options.data = JSON.stringify(options.data);
        options.contentType = 'application/json';
      }
      return Ember.$.ajax(options);
    }).catch(function(reason) {
      if(reason.status / 100 === 4 || reason.status / 100 === 5) {
        // is 4XX or 5XX error
        throw new Error(reason.responseText);
      }
      else {
        throw reason;
      }
    });
  },

  get(url, options) {
    return this.service('GET', url, options);
  },

  post(url, options) {
    return this.service('POST', url, options);
  }
});
