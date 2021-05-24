var divMap = document.getElementById('divMap');
var coords = {
    lat: 19.041325, lng: -98.210819,
}
var map;
var props = {
    center: coords,
    zoom: 6,
    mapTypeId: 'terrain',
}

function initMap() {
    if(isLogged == true) {
        map = new google.maps.Map(divMap, props);
    
        let circle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.6,
            strokeWeight: 2,
            fillColor: 0.25,
            map: map,
            center: usercoords,
            radius: Math.sqrt(location.poblation),
        });
    }
}
