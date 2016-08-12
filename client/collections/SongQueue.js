// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
 

    this.on('add', function(e) {
      // if this is breaking, remove .models
      if (this.models.length <= 1) {
        console.log('song added heard in songqueue');
        return this.playFirst(e);
      } else {
        console.log('what needs to happen here?');
        e.enqueue();
      }
    }, this);

     
    this.listenTo(this, 'ended', function(e) {
      console.log('song ended heard in songqueue');
      this.remove(this.models[0]);
    });

    this.on('remove', function() {
      if (this.models.length > 0) {
        console.log('song removed in song queue');
        this.playFirst(this.models[0]);
      }
    });

    this.listenTo(this, 'dequeue', function(e) {
      console.log('song dequeued in song queue');
      this.remove(this.models[0]);
    });

    this.listenTo(this, 'enqueue', function(e) {
      console.log('lets start here');
    });
    
  },

  playFirst: function(e) {
    console.log(e);
    console.log(this.models[0]);
    e ? e.play() : this.models[0].play();
  }

});