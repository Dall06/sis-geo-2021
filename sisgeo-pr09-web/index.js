var coords = {
  lat: 0,
  lng: 0
};

var props = {
  center: coords,
  zoom: 2
};

const getMarkers = () => {

  const markers = [
      {
          name: "México",
          longitude: "-99.1276",
          latitude: "19.427"
      }, {
          name: "Brazil",
          longitude: "-47.9292",
          latitude: "-15.7801"
      }, {
          name: "Spain",
          longitude: "-3.70327",
          latitude: "40.4167"
      }
  ];
  return markers;
};


function initMap(){
  const map = new google.maps.Map(document.getElementById('divMap'), props);
  const markers = getMarkers();

  console.log(markers);

  for( m of  markers){
      let marker = new google.maps.Marker({
          map: map,
          position: new google.maps.LatLng(m.latitude, m.longitude),
          title: m.name
      });
  }
};