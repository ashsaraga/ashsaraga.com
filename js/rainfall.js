$(document).ready(function() {
  rainfall();
  perspective();
  
  function rainfall() {
    if ($(window).width() < 500 ) {
      setInterval(function() {
        rain();
      }, 100 );
    }
    else if ($(window).width() < 900 ) {
      setInterval(function() {
        rain();
      }, 50 );
    } else {
      setInterval(function() {
        rain();
      }, 10 );
    }
  }
  
  function wind() {
  	var count = randomInt(1,3);
  	var gust = count*1000;
  	return gust;
  }

  function rain() {
    var rainX = Math.floor(Math.random() * 101);
    var rainY = Math.floor(Math.random() * 101);
    drops(rainX, rainY);
  }
  
  function drops(dropX, dropY) {
    $('#rain').delay(wind()).append('<div class="drop solid" style="top:'+dropX+'%;left:'+dropY+'%;"></div>');
    var bead = $('#rain .drop').last();
    $(bead).animate({ opacity: 1 }, 500 );
    $(bead).delay(200).removeClass('solid');
    $(bead).animate({ opacity: 0, height: '+=65' }, 2500);
    setTimeout(function() {
      $(bead).remove();
    }, 5000);
  }

  function randomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  function perspective() {
    var moods = ['morpheus', 'azure', 'grass', 'fruit', 'deep', 'sunset', 'lemon'];
    var feeling = 0;
    $('body').addClass(moods[feeling]);
    $('#perspective__change').click(function() {
      $('#perspective__change svg').addClass('refresh');
      $('body').removeClass(moods);
      if (feeling >= moods.length-1) {
        feeling = 0;
      } else {
        feeling += 1;
      }
      $('body').addClass(moods[feeling]);
      setTimeout(function() {
        $('#perspective__change svg').removeClass('refresh');
      }, 1000);
      
    });
  }
});