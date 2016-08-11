// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!



  initialize: function() {
   this.render();
   console.log(this);

  },

  render: function() {
    console.log(this)
    var html = [
      '<div>',
      '</div>'
    ].join('');
     console.log(html);

   return this.$el.html(html);
  }

});
