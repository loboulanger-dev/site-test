	////SCRIPT FOR MODAL POPUP WINDOW

jQuery(document).ready(function(){	
	jQuery('#promo-container a.close').click(function(){
			jQuery('promo-container').fadeOut();
			jQuery('#active-popup').fadeOut();
	});
	
	var visits = jQuery.cookie('visits') || 0;
	visits++;
	
	jQuery.cookie('visits', visits, { expires: 1, path: '/' });
		
	console.debug(jQuery.cookie('visits'));
		
	if ( jQuery.cookie('visits') > 1 ) {
		jQuery('#active-popup').hide();
		jQuery('#promo-container').hide();
	} else {
			var pageHeight = jQuery(document).height();
			jQuery('<div id="active-popup"></div>').insertBefore('body');
			jQuery('#active-popup').css("height", pageHeight);
			jQuery('#promo-container').show();
	}

	if (jQuery.cookie('noShowWelcome')) { jQuery('#promo-container').hide(); jQuery('#active-popup').hide(); }
});	

jQuery(document).mouseup(function(e){
	var container = jQuery('#promo-container');
	
	if( !container.is(e.target)&& container.has(e.target).length === 0)
	{
		container.fadeOut();
		jQuery('#active-popup').fadeOut();
	}

});
