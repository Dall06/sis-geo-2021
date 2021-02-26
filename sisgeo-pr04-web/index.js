var btnGetPositionOnClickListener = () => {
  if (navigator.geolocation ) {
    navigator.geolocation.getCurrentPosition(showPositionAction);
  } else {
    dataLocation.innerHTML = "This web browsser does not support the geolocalization action";
  }
}

var showPositionAction = (p) => {
  var coords = p.coords.latitude + "," + p.coords.longitude;
  console.log(coords);

  var imagenurl = "https://maps.googleapis.com/maps/api/staticmap?center="+coords+"&zoom=20&size=800x800&key=AlzaSyAv-m46ebiV9fqkE2flBGeWunmGmBm2R24";
  var map = document.getElementsById("imgMap");
  
  map.src = imagenurl;
}