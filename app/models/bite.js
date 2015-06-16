import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  videoId: DS.attr('string'),
  isComplete: DS.attr('boolean')
}).reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Complete Ember.js Tutorial",
      videoId: "video1",
      isComplete: false
    },
    {
      id: 2,
      title: "Checkout some more ember stuff",
      videoId: "video2",
      isComplete: true
    },
    {
      id: 3,
      title: "Solve world hunger (with Ember)",
      videoId: "video3",
      isComplete: false
    }
  ]
});
