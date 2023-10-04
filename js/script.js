// jq
$(document).ready(function(){

	$('.ques').on('click', function(){

		$('.answ').slideToggle(500);
	})

	// slideUp

	$( "p" ).on( "click", function() {
  	$( this ).slideUp();
	} );

	// animate
	$( "#go" ).on( "click", function() {
  	$( "#block" ).animate({
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  }, 1500 );
});

	// fadeIn
	$( document.body ).on( "click", function() {
  	$( "h2:hidden" ).first().fadeIn( "slow" );
	});

	$( "button" ).on( "click", function( event ) {
  	return "hey";
	});
	$( "button" ).on( "click", function( event ) {
 	 $( "cp" ).html( event.result );
	});

	// contextmenu event
	var h3 = $( "h3" ).first();
	h3.on( "contextmenu", function() {
  	h3.toggleClass( "contextmenu" );
	} );

	// dblclick event
	var demo1dbl = $( "demo1" ).first();
	demo1dbl.on( "dblclick", function() {
  	demo1dbl.toggleClass( "dbl" );
	} );

	// hover
	$( "li" )
  	.odd()
    .hide()
  	.end()
  	.even()
    .hover(function() {
     $( this )
       .toggleClass( "active" )
       .next()
       .stop( true, true )
       .slideToggle();
    });

    // focus event
    $( "input" ).on( "focus", function() {
 	$( this ).next( "mspan" ).css( "display", "inline" ).fadeOut( 1000 );
	} );


})