var coords = {
  lat: -31.563910, lng: 147.154312
}

var props = {
  center: coords,
  zoom: 6,
  mapTypeId: 'terrain',
}

var divMap;
var map;

function initMap() {
  divMap = document.getElementById('divMap');
  map = new google.maps.Map(divMap, props);

  fetch('locations.json').then((response) => {
    response.json().then((locations) => {
      locations.forEach(location => {
        console.log(location);

        let circle = new google.maps.circle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.6,
          strokeWeight: 2,
          fillColor: 0.25,
          map: map,
          center: location.coords,
          radius: Math.sqrt(location.poblation),
        });
        


      });
    });
  });
};