// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
  },

  render: function() {
    this.$el.children().detach();

    return this.$el.html('<th>Queue</th').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
    // this.collection.forEach(this.renderQueueEntryView, this);
  },

  // renderQueueEntryView: function () {
  //   var songQueueEntryView = new SongQueueEntryView({model: SongModel});
  //   this.$el.append(songQueueEntryView.render());
  // }

});
