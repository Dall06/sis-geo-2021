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
var tbl;
var fligthsCoords = [];

function initMap() {
  divMap = document.getElementById('divMap');
  tbl = document.getElementById('tblLocations');

  map = new google.maps.Map(divMap, props);

  fetch('locations.json').then((response) => {
    response.json().then((locations) => {
      locations.forEach(location => {
        fligthsCoords.push({lat: location.lat, lng: location.lng})


        let circle = new google.maps.Circle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.6,
          strokeWeight: 2,
          fillColor: 0.25,
          map: map,
          center: location.coords,
          radius: Math.sqrt(location.poblation),
        });

        let polyLine = new google.maps.Polyline({
          path: fligthsCoords,
          geodesic: true, // 
          strokeColor: '#666666',
          strokeOpacity: 1,
          strokeWeight: 2,
        });
        polyLine.setMap(map);

        tbl.innerHTML = `
        <th scope="row">${location.name}</th>
        <td>${location.state}</td>
        <td>${location.poblation}</td>
        <td>${location.coords.lat}</td>
        <td>${location.coords.lng}</td>
      `;

      });
    });
  });
};