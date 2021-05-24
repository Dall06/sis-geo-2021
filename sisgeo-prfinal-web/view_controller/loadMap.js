var map;

var coords = {
    lat: 0,
    lng: 0
};

var props = {
    center: coords,
    zoom: 2
};

const setMarker = (user) => {
    var marker = {
        longitude: user.lng,
        latitude: user.lat,
    };

    let m = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(marker.latitude, marker.longitude),
        title: "Last location"
    });
    m.setMap(map);
};

function initMap() {
    map = new google.maps.Map(document.getElementById('divMap'), props);
}
