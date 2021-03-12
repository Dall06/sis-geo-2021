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
    .then(function(response) {

      response.json().then(function(d) {
        const map = new google.maps.Map(document.getElementById('divMap'), props);

        d.forEach(function(m) {
          fetch('https://corona.lmao.ninja/countries')
            .then(function(r) {
              r.json().then(function(countryData) {
                countryData.forEach(function(r) {
                  if (r.country == m.CountryName) {
                    let info = "<strong>País:</strong> " + r.country + "<br><strong>Casos:</strong> " + 
                                      r.cases + "<br><strong>Nuevos hoy:</strong> " + r.todayCases + 
                                      "<br><strong>Muertes:</strong> " + r.deaths + "<br><strong>Muertes Hoy:</strong> " + 
                                      r.todayDeaths + "<br><strong>Recuperados:</strong> " + r.recovered + 
                                      "<br><strong>Activos:</strong> " + r.active + "<br><strong>Críticos:</strong> " + 
                                      r.critical + "<br><strong>Casos por millón:</strong> " + r.casesPerOneMillion;

                    let infowindow = new google.maps.InfoWindow({content: info});

                    let marker = new google.maps.Marker({
                      map: map,
                      position: new google.maps.LatLng(m.CapitalLatitude, m.CapitalLongitude),
                      title: m.CountryName + r.cases
                    });

                    marker.addListener('click', function() {
                      infowindow.open(map, marker);
                    });
                  }
                });
              });
            });
        });
      });
    })
    .catch(function (error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
};