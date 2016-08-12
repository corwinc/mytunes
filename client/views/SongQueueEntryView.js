// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function() {
   this.render();
   console.log(this);

  },

  render: function() {
    // console.log(this)
    // var html = [
    //   '<div>',
    //   '</div>'
    // ].join('');
    //  console.log(html);

   return this.$el.html(this.template(this.model.attributes));
  }

});
