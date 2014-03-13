function initialize() {
  var map_canvas = document.getElementById('map_canvas');
  var map_options = {
    center: new google.maps.LatLng(37.767034, -122.287819),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(map_canvas, map_options)

  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
	var marker = new google.maps.Marker({
	  position: myLatLng,
	  map: map,
	  icon: iconBase + 'schools_maps.png'
	});
}
google.maps.event.addDomListener(window, 'load', initialize);