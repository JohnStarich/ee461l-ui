import Ember from 'ember';

export default Ember.Object.extend({
  service(method, url, data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      let options = {
        url: url,
        type: method,
        dataType: 'json',
        success: resolve,
        error: reject
      };
      if(method !== 'GET' && method !== 'get') {
        options.data = JSON.stringify(data);
        options.contentType = 'application/json';
      }
      else {
        options.data = data;
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

  get(url, data) {
    return this.service('GET', url, data);
  },

  post(url, data) {
    return this.service('POST', url, data);
  }
});
