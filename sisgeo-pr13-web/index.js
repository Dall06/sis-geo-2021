var map;

var styleMapType = new google.maps.styleMapType([
    {
      elementType: 'geometry',
      stylers: [{
        color: '#77a4ed',
      }],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [{
        color: '#e0b9eb',
      }],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#bcebb2',
      }],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#bcebb2',
      }],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{
        color: '#28ad37',
      }],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{
        color: '#9caab5',
      }],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#e0b9eb',
      }],
    },
  ], {
    name: 'Dark mode map',
  }
);

let coords = {
  lat: -31.563910, lng: 147.154312
}
let props = {
  center: coords,
  zoom: 14,
  // disableDefaultUI: true,
  mapTypeControlOptions: [ 'roadmap', 'satellite', 'hybrid', 'terrain', 'style_map']
}
let divMap = document.getElementById('divMap');

document.head.appendChild(script);

function initMap() {
  map = new google.maps.Map(divMap, props);

  map.mapTypes.set('style_map', styleMapType);
  map.setMapTypeId('style_map');


};