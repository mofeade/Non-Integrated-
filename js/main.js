(function () {
	var map = new google.maps.Map(document.querySelector('.map-wrapper')),
	preloader = document.querySelector('.preload-wrapper'),


	//import the geocode API
	geocoder = new google.maps.Geocoder(),
	geocodeButton = document.querySelector('.geocode'),

	//directions display
	directionsService = new google.maps.DirectionsService(),
	directionsDisplay,
	locations = [],

	marker;

	function initMap(position) {

		//save out location
		locations[0] = {lat: position.coords.latitude, lng: position.coords.longitude};
		directionsDisplay = new google.maps.DirectionsRenderer();
		directionsDisplay.setMap(map);

		map.setCenter ({ lat: position.coords.latitude, lng: position.coords.longitude});
		map.setZoom (14);

		var image = 'images/marker.png'
		marker = new google.maps.Marker({
			position : {lat: position.coords.latitude, lng: position.coords.longitude},
			map: map,
			animation: google.maps.Animation.DROP,
			icon: image, 
			title: "youre here"
		});

		preloader.classList.add('hide-preloader');
	}

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(initMap, handleError);
	} else {
		console.log('it  is broken');
	}

	function handleError() {
		console.log('SOMETHING IS SERIOUSLY WRONG');
	}


	function codeAddress() {
		var address = document.querySelector('.address').value;

		geocoder.geocode({'address': address}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				// push locations into array 
				locations[1] = { lat: results[0].geometry.location.lat(),
								 lng: results[0].geometry.location.lng()
								};

				map.setCenter(results[0].geometry.location);

				if (marker) {
					marker.setMap(null);

					marker = new google.maps.Marker({
						map: map,
						position: results[0].geometry.location
					});

					calcRoute(results[0].geometry.location);
				} 
					else {
					console.log('Geocode was not successful for the folling reason', status)
				}
			}

		});
	}


	function calcRoute(){
		var request = {
			origin: locations[0],
			destination: locations[1],
			travelMode: 'DRIVING' 
		};

		directionsService.route(request, function(response,status) {
			if (status == 'OK') {
				directionsDisplay.setDirections(response);
			}
		});

	}

	geocodeButton.addEventListener('click', codeAddress, false);

	})();
