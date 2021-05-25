var map;

var coords = {
    lat: 0,
    lng: 0
};

var props = {
    center: coords,
    zoom: 2
};


function initMap() {
    map = new google.maps.Map(document.getElementById('divMap'), props);
}

const setMarker = (user) => {
    let positionCoords = {
        lng: user.lng,
        lat: user.lat,
    };

    geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'location': {lat: positionCoords.lat, lng: positionCoords.lng} }, function (results, status) {
        if (status == 'OK') {
            var locationP = document.getElementById('location-p');
            locationP.innerHTML = `
                <p><strong>Detalles:</strong> ${ results[0].formatted_address} </p>
            `;
            map.setCenter(results[0].geometry.location);

            markerMap = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(positionCoords.lat, positionCoords.lng),
                title: "Last location"
            });
            markerMap.setMap(map);
        }
        else {
            alert('Geocode no se ejecuto con éxito.');
        }
    });
};