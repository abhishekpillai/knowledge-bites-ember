import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  videoId: DS.attr('string')
}).reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Complete Ember.js Tutorial",
      videoId: "video1"
    },
    {
      id: 2,
      title: "Checkout some more ember stuff",
      videoId: "video2"
    },
    {
      id: 3,
      title: "Solve world hunger (with Ember)",
      videoId: "video3"
    }
  ]
});
