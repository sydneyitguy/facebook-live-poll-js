window.LivePoll = (function() {

  // Only variables to configure
  var ACCESS_TOKEN = '1234567890|WHATEVERblahblah';
  var VIDEO_ID = '1234567890';

  getUrl = function(reactionType) {
    return 'https://graph.facebook.com/' + VIDEO_ID + '/reactions?type=' + reactionType +'&limit=0&summary=true&access_token=' + ACCESS_TOKEN;
  };

  fetch = function() {
    $.getJSON(getUrl('LIKE'), function(data) {
      $('#likes').text(data.summary.total_count);
    });
    $.getJSON(getUrl('LOVE'), function(data) {
      $('#loves').text(data.summary.total_count);
    });
  };

  return {
    start: function(checkInterval) {
      setInterval(function(){ fetch() }, checkInterval);
    }
  };
})();
