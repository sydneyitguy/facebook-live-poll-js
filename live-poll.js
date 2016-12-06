var LivePoll = (function() {

  // Only variables to configure
  var ACCESS_TOKEN = '';
  var POST_ID = '';

  fetch = function() {
    $.getJSON('https://graph.facebook.com/' + POST_ID + '/reactions?type=LIKE&limit=0&summary=true&access_token=' + ACCESS_TOKEN, function(data) {
      $('#likes').text(data.summary.total_count);
    });
    $.getJSON('https://graph.facebook.com/' + POST_ID + '/reactions?type=LOVE&limit=0&summary=true&access_token=' + ACCESS_TOKEN, function(data) {
      $('#loves').text(data.summary.total_count);
    });
  };

  return {
    start: function(checkInterval) {
      setInterval(function(){ fetch() }, checkInterval);
    }
  };
})();
