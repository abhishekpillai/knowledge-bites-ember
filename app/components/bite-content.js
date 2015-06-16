import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
             complete: function(bite) {
                         bite.set('isComplete', true);
                       }
           }
});
