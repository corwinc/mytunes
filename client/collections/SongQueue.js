// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
 

    this.on('add', function(e) {
      // if this is breaking, remove .models
      if (this.models.length <= 1) {
        return this.playFirst(e);
      }
    }, this);

     
    this.listenTo(this, 'ended', function(e) {
      this.remove(this.models[0]);
    });

    this.on('remove', function() {
      if (this.models.length > 0) {
        this.playFirst(this.models[0]);
      }
    });

    this.listenTo(this, 'dequeue', function(e){
      this.remove(this.models[0]);
    });



  },

  playFirst: function(e) {
    e ? e.play() : this.models[0].play() ;
  }

});