// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    console.log('song model played');
    this.trigger('play', this);
  },

  enqueue: function() {
    // Triggering an event here will also trigger the event on the collection
    console.log('song model enqueued');
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    // Triggering an event here will also trigger the event on the collection
    console.log('song model dequeued');
    this.trigger('dequeue', this);
  },

  ended: function() {
    // Triggering an event here will also trigger the event on the collection
    console.log('song model ended');
    this.trigger('ended', this);

  },

});
