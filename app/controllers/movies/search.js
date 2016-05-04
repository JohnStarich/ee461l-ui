import Ember from 'ember';

export default Ember.Controller.extend({
  serializedQuery: Ember.computed('model.search', function() {
    const query = this.get('model.search');
    if(query !== undefined && query !== '' && query.trim().length > 0){
      return query.trim().split(' ').join('+');
    }
    return undefined;
  }),

  runSearch: Ember.observer('model.search', function() {
    Ember.run.debounce(this, this.actions.search, 500);
  }),

  actions: {
    loading(transition) {
      // const controller = this.controllerFor('movies.search');
      // controller.set('status', 'loading');
      transition.promise.finally(() => {
        // controller.set('status', undefined);
      });
    },

    search() {
      const query = this.get('serializedQuery');
      if(query) {
        this.transitionToRoute('movies.search', query);
      }
    }
  }
});
