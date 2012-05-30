$( '#main' ).live( 'pageinit', function(event) {
  //alert( 'This page was just enhanced by jQuery Mobile!' );
	
	$("#search").mobile_fs_suggest({
		'client_id'		: '2RIEFGJ11QYCMK1KW2RECDINMBWEL2IMUWYUC4MGGYGQQBDL',
		'client_secret'	: '02SA1F4ZLE3SRFJUM0RKLGJRVWS43M1EAG4DYZEFP1SFISU3'
	});
	
	// Options: retrieve the location every 3 seconds
	//
	var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { frequency: 6000 });
});