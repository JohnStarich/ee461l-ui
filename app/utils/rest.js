import Ember from 'ember';
import Utils from 'moviematcher/utils/general';

export default class RestUtils {
  static service(route, method, url, options) {
    if(route instanceof String) {
      throw new Error("Route provided for ajax call is not of type Ember.Route");
    }
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if(! options) { options = {}; }
      options.url = url;
      options.type = method;
      if(! options.dataType) { options.dataType = 'json'; }
      options.success = resolve;
      options.error = reject;
      if(method !== 'GET' && method !== 'get') {
        options.data = JSON.stringify(options.data);
        options.contentType = 'application/json';
      }
      const authorization = Utils.authToken();
      if(authorization) {
        if(! options.headers) {
          options.headers = {};
        }
        options.headers['Authorization'] = authorization;
      }
      return Ember.$.ajax(options);
    }).catch((reason) => {
      if(reason.status === 401) {
        Utils.login(route);
      }
      else if(reason.status / 100 === 4 || reason.status / 100 === 5) {
        // is 4XX or 5XX error
        throw new Error(reason.responseText);
      }
      else {
        throw reason;
      }
    });
  }

  static get(route, url, options) {
    return this.service(route, 'GET', url, options);
  }

  static post(route, url, options) {
    return this.service(route, 'POST', url, options);
  }

  static patch(route, url, options) {
    return this.service(route, 'PATCH', url, options);
  }

  static put(route, url, options) {
    return this.service(route, 'PUT', url, options);
  }

  static delete(route, url, options) {
    return this.service(route, 'DELETE', url, options);
  }
}
