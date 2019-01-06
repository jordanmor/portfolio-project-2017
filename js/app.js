// Navbar scroll transparency
var didScroll;

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);


function hasScrolled() {
	$(window).scroll(function() {
	  if ($(document).scrollTop() > 50) {
	    $('.main-nav').addClass('transparent');
	  } else {
	    $('.main-nav').removeClass('transparent');
	  }
	});
}

// ===== Project Modal ======

const $modal = $('#projectModal');

$modal.on('click', function() {
	// $(this).hide();
	$('.modal-body').children('img').remove();
	// adds scrolling ability back to body after modal closed
	$('body').css('overflow', '');
	$modal.removeClass('fade-in');
});

$('.photo').on('click', function(event) {
	event.preventDefault();
	var imageLocation = $(this).children('img').attr('src');
	$('.modal-body').append('<img src=' + imageLocation + '>')
	// $modal.show();
	// prevents body underneath modal from scrolling
	$('body').css('overflow', 'hidden');
	$modal.addClass('fade-in');
});


// ===== Automatic Typing ======

 // set up text to print, each item in array is new line

// var intervalID = setInterval(myCallback, 3000);

// function myCallback() {

	var aText = [
		"Hi! I'm a web developer",
		"Welcome to my website!",
		"Please check out some of the projects I've worked on"
		];

	var iSpeed = 150; // time delay of print out
	var iIndex = 0; // start printing array at this position
	var iArrLength = aText[0].length; // the length of the text array
	var iScrollAt = 0; // start scrolling up at this many lines
	 
	var iTextPos = 0; // initialise text position
	var sContents = ''; // initialise contents variable
	var iRow; // initialise current row
	 
	function typewriter() {
		sContents =  ' ';
		iRow = Math.max(0, iIndex-iScrollAt);
		var destination = document.getElementById("devText");

		while ( iRow < iIndex ) {
		sContents += aText[iRow++] + '<br />';

	}

	 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
		if ( iTextPos++ == iArrLength ) {
			iTextPos = 0;
			iIndex++;
			if ( iIndex != aText.length ) {
				iArrLength = aText[iIndex].length;
				setTimeout("typewriter()", 500);
			}
		} else {
			setTimeout("typewriter()", iSpeed);
		}
	}

	typewriter();

// myCallback();

// function typeWriter(text, n) {
//   if (n < (text.length)) {
//     $('.test').html(text.substring(0, n+1));
//     n++;
//     setTimeout(function() {
//       typeWriter(text, n)
//     }, 100);
//   }
// }

// $('.start').click(function(e) {
//   e.stopPropagation();
  
//   var text = $('.test').data('text');
  
//   typeWriter(text, 0);
// });























