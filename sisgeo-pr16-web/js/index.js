var map;
var service;
var infoWindow;
var coords = { lat: 21.152639, lng: -101.711598 };
var props = {
  center: coords,
  zoom: 12,
}

function createMarker(place) {
  var icono = {
    url: place.icon,
    scaledSize: new google.maps.Size(25, 25),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0)
  };
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    icon: icono
  });
  google.maps.event.addListener(marker, 'click', function () {
    infoWindow.setContent(place.name + ', ' + place.formatted_address);
    infoWindow.open(map, this);
  });
}

const onClickSearchButtonAction = () => {

  let inSearch = document.getElementById('inSearch');

  var request = {
    query: inSearch.value,
    fields: ['place_id', 'name', 'formatted_address', 'icon', 'geometry']
  };

  service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(request, function (results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
      map.setCenter(results[0].geometry.location);
    }
  });
}

function initMap() {
  infoWindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById('divMap'), props);
}