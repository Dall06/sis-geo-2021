var map;
var coords = {
  lat: -31.563910, lng: 147.154312
}
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

function initMap() {
  map = new google.maps.Map(
    document.getElementById('divMap'),
    {
      center: coords,
      zoom: 3,
      disableDefaultUI: true,
    }
  );
  const leng = urlParams.get('lenguage');
  
  var script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDVCNZHDPwh-wnnOTVGqDUjgOLIpHhcFaE&callback=initMap&lenguage' + leng;
  
  document.head.appendChild(script);


};