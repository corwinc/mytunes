// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'https://api.parse.com/1/classes/songs',


  initialize: function() {
    var context = this;
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'https://api.parse.com/1/classes/songs',
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      success: function (data, status, xhr) {
        data.results.forEach(function(song){
          var song = new SongModel(song);
          context.add(song);
        });
        context.trigger('fetcher', context);
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
    
  },

});