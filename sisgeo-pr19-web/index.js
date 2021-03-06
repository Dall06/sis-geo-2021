var coords = {
  lat: 19.041325, lng: -98.210819,
}

var props = {
  center: coords,
  zoom: 6,
  mapTypeId: 'terrain',
}

var divMap;
var map;
var tbl;
var stringTbl = '';
var fligthsCoords = [];

function initMap() {
  divMap = document.getElementById('divMap');
  tbl = document.getElementById('tblLocations');

  map = new google.maps.Map(divMap, props);

  fetch('locations.json').then((response) => {
    response.json().then((locations) => {
      locations.forEach(location => {
        console.log(location);
        fligthsCoords.push({lat: parseFloat(location.coords.lat), lng: parseFloat(location.coords.lng)})


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

        stringTbl += `<tr>
          <th scope="row">${location.name}</th>
          <td>${location.state}</td>
          <td>${location.poblation}</td>
          <td>${location.coords.lat}</td>
          <td>${location.coords.lng}</td>
          </tr>`;
        tbl.innerHTML = stringTbl;

      });
    });
  });
};