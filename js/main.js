/*
 _____   _           _         _                        _
|_   _| | |         | |       | |                      | |
  | |   | |__   __ _| |_ ___  | |_ ___  _ __ ___   __ _| |_ ___   ___  ___
  | |   | '_ \ / _` | __/ _ \ | __/ _ \| '_ ` _ \ / _` | __/ _ \ / _ \/ __|
 _| |_  | | | | (_| | ||  __/ | || (_) | | | | | | (_| | || (_) |  __/\__ \
 \___/  |_| |_|\__,_|\__\___|  \__\___/|_| |_| |_|\__,_|\__\___/ \___||___/

Oh nice, welcome to the js file of dreams.
Enjoy responsibly!
@ihatetomatoes

*/

$(document).ready(function() {

	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);

});

window.onload = function() {
	var btn = document.querySelector( '.new-submit-btn' );

	var btnFront = btn.querySelector( '.btn-front' ),
		btnYes = btn.querySelector( '.btn-back .yes' ),
		btnNo = btn.querySelector( '.btn-back .no' );

	btnFront.addEventListener( 'click', function( event ) {
		var mx = event.clientX - btn.offsetLeft,
			my = event.clientY - btn.offsetTop;

		var w = btn.offsetWidth,
			h = btn.offsetHeight;

		var directions = [
			{ id: 'top', x: w/2, y: 0 },
			{ id: 'right', x: w, y: h/2 },
			{ id: 'bottom', x: w/2, y: h },
			{ id: 'left', x: 0, y: h/2 }
		];

		directions.sort( function( a, b ) {
			return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
		} );

		btn.setAttribute( 'data-direction', directions.shift().id );
		btn.classList.add( 'is-open' );
	} );

	btnYes.addEventListener( 'click', function( event ) {
		btn.classList.remove( 'is-open' );
	} );

	btnNo.addEventListener( 'click', function( event ) {
		btn.classList.remove( 'is-open' );
	} );

	function distance( x1, y1, x2, y2 ) {
		var dx = x1-x2;
		var dy = y1-y2;
		return Math.sqrt( dx*dx + dy*dy );
	}

};
