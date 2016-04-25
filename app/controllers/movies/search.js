import Ember from 'ember';

export default Ember.Controller.extend({
  status: undefined,

  serializedQuery: Ember.computed('model.search', () => {
    const query = this.get('model.search');
    if(query !== undefined && query !== '' && query.trim().length > 0){
      return query.trim().split(' ').join('+');
    }
    return undefined;
  }),

  runSearch: Ember.observer('model.search', () => {
    Ember.run.debounce(this, this.actions.search, 500);
  }),

  actions: {
    loading(transition) {
      this.set('status', 'loading');
      transition.promise.finally(() => {
        this.set('status', undefined);
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
