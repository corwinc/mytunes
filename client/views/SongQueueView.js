// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', this.render, this);
  },

  render: function() {
    var html = [
      '<div>',
        'hey',
      '</div>'
    ].join('');

    var songQueueEntryView = new SongQueueEntryView({model: SongModel});
    //return this.$el.html(html);
  }

});
