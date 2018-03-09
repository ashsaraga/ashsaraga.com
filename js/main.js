$(document).ready(function() {
	setTimeout(function() {
	  titleSequence();
  }, 2000);
  scrollMe();
  skillPoints();


	function titleSequence() {
		var line1 = 'Hello, there.';
		var line2 = "I'm Ash.";
		var line3 = 'Developer, designer, teacher, sci-fi enthusiast.';
		
		line1 = line1.split("");
		line2 = line2.split("");
		line3 = line3.split("");

		var pane = $( '.intro__text' );
		var salut = $( '.intro__text h3' );
		var intro = $( '.intro__text h2' );
		var deets = $( '.intro__text h4' );

		pane.queue( 'welcome', function( next ){
			$.each( line1, function(index, value) {
				var letter = value;
				salut.queue( "greeting", function( next ){
	        salut.append(letter);
	        next();
			  });
				salut.delay( 90, "greeting" );
			});
			salut.dequeue( "greeting",);
			next();
		});

		pane.delay( 2000, 'welcome' );

		pane.queue( 'welcome', function( next ){ 
			$('.intro__text h3').animate({ opacity: .65, top: '-=25' }, 1100, 'swing');
			next(); 
		});

		pane.delay( 1000, 'welcome' );

		pane.queue( 'welcome', function( next ){ 
			$.each( line2, function(index, value) {
				var letter = value;
				intro.queue( 'name', function( next ){ 
					intro.append(letter);
					next();
				});
				intro.delay( 190, 'name' );
			});
			intro.dequeue( 'name' ); 
			next();
		});

		pane.delay( 2800, 'welcome' );

		pane.queue( 'welcome', function( next ){ 
			$.each( line3, function(index, value) {
				var letter = value;
				deets.queue( 'bio', function( next ){
					deets.append(letter);
					next();
				});
				deets.delay( 75, 'bio' );
			});
			deets.dequeue( 'bio' ); 
			next();
		});

		pane.delay( 750, 'welcome' );

		pane.queue( 'welcome', function( next ){ 
			$('.intro__text hr').animate({width: '100%'}, 2500, 'linear');
			next();
		});
	
		pane.delay( 2500, 'welcome' );

		pane.queue( 'welcome', function( next ){ 
			$('#perspective').animate({opacity: 1}, 2000, 'linear');
			next();
		});

		pane.dequeue( 'welcome' );
	}

	function scrollMe() {
		$('#perspective__scroll').click(function() {
			var begin = ($('#intro').offset().top)-45;
			$("html, body").animate({
      	scrollTop: begin
    	}, 700);
		});
	}

	function skillPoints() {
		var skillSet = ($('#stats').offset().top)-100;
		$(window).scroll(function(){
			if($(window).scrollTop() > skillSet){
    		$('.skill_points').each(function(index, element){
    			var level = $(element).children('span').attr('class');
    			$(element).css('background-size', ''+level+'% 100%');
    		}); 
    	}
		});
	}
});