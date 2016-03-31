import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    save3(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      this.transitionTo('post', params.post_id);
    }
  }
});
