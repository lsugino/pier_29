var pier29 = new google.maps.LatLng(37.767034, -122.287819);
var marker;
var map;

function initialize() {
  var mapOptions = {
    zoom: 14,
    center: pier29
  };

  map = new google.maps.Map(document.getElementById('map_canvas'),
          mapOptions);

  marker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: pier29
  });
  google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
