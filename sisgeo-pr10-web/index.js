var coords = {
  lat: 0,
  lng: 0
};

var props = {
  center: coords,
  zoom: 2
};

function initMap() {
  fetch('paises.json')
  .then(function(r) {
    r.json().then(function(data) {
      const map = new google.maps.Map(document.getElementById("divMap"), props);

      data.forEach(m => {
        fetch('https://corona.lmao.ninja/countries')
        .then(function(fr) {
          console.log(fr);


        })
      });
    })
  })
  .catch(function(e) {console.log(e);})
};