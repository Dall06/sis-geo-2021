var map = null;
var divMap = document.getElementById('divMap');
var divData = document.getElementById('divData');
var watchId = null;

var marker;
var positionOptions;

function initMap() {
  const icon = {
    url: "https://media.giphy.com/media/1iTH1WIUjM0VATSw/giphy.gif",
    scaledSize: new google.maps.Size(80, 80),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0)
  }

  var coords = {
    lat: -31.563910, lng: 147.154312
  }

  var props = {
    center: coords,
    zoom: 14,
    disableDefaultUI: true,
  }
  
  map = new google.maps.Map(divMap, props);


  marker = new google.maps.Marker({
    position: { lat: 0, lng: 0 },
    icon: icon,
    map: map
  });

  positionOptions = {
    enableHighAccuracy: true,
    timeout: 5 * 1000,
    maximumAge: 15 * 1000
  }
}

function error(positioError) {
  console.log(positioError.messsage);
}

const StartTrackingAction = () => {
  if (navigator.geolocation) {
    watchId = navigator.geolocation.watchPosition(function (position) {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;

      let _coords = lat + ',' + lng;

      let accuracy = position.coords.accuracy ? position.coords.accuracy : 'no aviable';
      let altitude = position.coords.altitude ? position.coords.altitude : 'no aviable';
      let speed = position.coords.speed ? position.coords.speed : 'no aviable';
      let updatedAt = (new Date(position.timestamp)).toString();

      const html = `<p>Coords: ${_coords}</p>
                    <p>Accuracy: ${accuracy}</p>
                    <p>Altitude: ${altitude}</p>
                    <p>Speed: ${speed}</p>
                    <p>Date and time: ${updatedAt}</p>`;

      divData.innerHTML = html;
      marker.setPosition(new google.maps.LatLng(lat, lng));
      map.panTo(new google.maps.LatLng(lat, lng));
    }, error, positionOptions);
  }
}

const StopTrackingAction = () => {
  if (watchId !== null) {
    navigator.geolocation.clearWatch(watchId);

    const html = `<p>Action stopped</p>
                  <p>Your last position is showed on the map</p>`;
    divData.innerHTML = html;
  }
}

function error(positioError){
  console.log(positioError.messsage);
}