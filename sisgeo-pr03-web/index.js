var dataLocation = document.getElementById("txtDataLocation");

var btnGetPositionOnClickListener = () => {
  if (navigator.geolocation ) {
    navigator.geolocation.getCurrentPosition(showPositionAction);
  } else {
    dataLocation.innerHTML = "This web browsser does not support the geolocalization action";
  }
}

var showPositionAction = (p) => {
  console.log(p)
  dataLocation.innerHTML = "Latitude: " + p.coords.latitude + "<br> Longitude" + p.coords.longitude;
}