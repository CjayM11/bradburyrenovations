

$(document).ready(function() {

    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
      // options
      cellAlign: 'left',
      contain: true
    });
    
    // element argument can be a selector string
    //   for an individual element
    var flkty = new Flickity( '.main-carousel', {
      // options
    });
	
	if ($('[data-lightbox="true"]')) {	
		// find all images in data-lightbox attr container
		var images = $(this).find('img');
		
		images.on('click', function() {
			// create lightbox
			$(this).parents('[data-lightbox]').after('<div class="lightbox"><section class="flkty"></section></div>');
			$('.lightbox').hide().fadeIn(300);
			
			// initialize flickity
			$('.flkty').flickity({
				autoPlay: false,
				pageDots: false,
				imagesLoaded: true,
				adaptiveHeight: true
			});

			// append the images to the lightbox gallery
			$('.flkty').flickity('append', images.clone());

			// open gallery at specific index
			var index = $(this).index();
			$('.flkty').flickity('selectCell', index);

			// set focus to flickity so keyboard navigation can be used
			$('.flkty').focus();

			// append close button
			$('.flkty').append('<button class="flickity-prev-next-button close" aria-label="close"><svg viewBox="0 0 10 10"><path d="M 1 1 L 9 9 M 1 9 L 9 1" class="cross"></path></svg></button>');
		});
	}
	
	// reposition images once loaded
	$(window).on('load', function() {
		$('.flkty').flickity('reposition');
	});

	// select cell on staticClick
	$(document).on('staticClick.flickity', '.flkty', function(event, pointer, cellElement, cellIndex) {
		if (typeof cellIndex == 'number') {
			$('.flkty').flickity('selectCell', cellIndex);
		}
	});

	// closeLightbox function
	function closeLightbox() {
		$('.lightbox').fadeOut(300, function() {
			$(this).remove();
		});
	}

	// trigger closeLightbox() on outside click
	$(document).on('click', '.lightbox', function(e) {
		if(!$(e.target).is('.flkty, .flkty *')) {
			closeLightbox();
		};
	});

	// trigger closeLightbox() on close button
	$(document).on('click', '.flickity-prev-next-button.close', function() {
		closeLightbox();
	});

	// trigger closeLightbox() on escape
	$(document).on('keyup', function(e) {
		if(e.keyCode == 27) {
			closeLightbox();
		}
	});

});