function initMap() {
  let coords = {
    lat: 0,
    lng: 0
  };
  
  let props = {
    center: coords,
    zoom: 20
  };

  let map = new google.maps.Map(document.getElementById("divMap"), props);

  var icon = {
    url: "https://media.giphy.com/media/1iTH1WIUjM0VATSw/giphy.gif",
    scaledSize: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0)
  }

  var marker = new google.maps.Marker({
    position: coords,
    icon: icon,
    map: map
  });

  if (navigator.geolocation) {
    setInterval(() => {
      console.log("Moving");
      moveMarkerEventListener(marker);
    }, 1000);
  }

  function moveMarkerEventListener(marker) {

    navigator.geolocation.getCurrentPosition(posicion => {
      var pos = {
        lat: posicion.coords.latitude,
        lng: posicion.coords.longitude
      }

      marker.setPosition(pos);
      map.panTo(pos);
      map.setCenter(pos);
    });
  }

}