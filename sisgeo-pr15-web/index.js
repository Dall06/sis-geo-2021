function initMap() {
  var coords = { lat: 21.152639, lng: -101.711598 };
  var limits = {
    north: 21.390039,
    south: 20.858414,
    west: -102.149631,
    east: -101.092990
  }
  var props = [];

  // m1
  props[0] = {
    center: coords,
    zoom: 12
  };
  // m2
  props[1] = {
    center: coords,
    zoom: 12,
    disableDefaultUI: true
  };
  // m3
  props[2] = {
    center: coords,
    zoom: 12,
    zoomControl: false,
    scaleControl: false
  };
  // m4
  props[3] = {
    center: coords,
    zoom: 12,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ['roadmap', 'satellite', 'terrain']
    }
  };
  // m5
  props[4] = {
    center: coords,
    zoom: 12,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_CENTER
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_CENTER
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP
    },
    fullscreenControl: true
  };
  // m6
  props[5] = {
    center: coords,
    zoom: 12,
    restriction: {
      latLngBounds: limits,
      strictBounds: false
    }
  };

  console.log(props);

  var map_1 = new google.maps.Map(document.getElementById('divMap_1'), props[0]);
  var map_2 = new google.maps.Map(document.getElementById('divMap_2'), props[1]);
  var map_3 = new google.maps.Map(document.getElementById('divMap_3'), props[2]);
  var map_4 = new google.maps.Map(document.getElementById('divMap_4'), props[3]);
  var map_5 = new google.maps.Map(document.getElementById('divMap_5'), props[4]);
  var map_6 = new google.maps.Map(document.getElementById('divMap_6'), props[5]);

}
